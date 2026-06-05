import React, { useState, useEffect, ReactNode, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Skeleton from "./Skeleton";
import styles from "../styles/components/loader.module.scss";

interface LoaderProps {
  children: ReactNode;
}

const asciiArt = [
  "      ┌──────────────────────────────────────────────┐      ",
  "      │  Booting Terminal Portfolio for user: hannya │      ",
  "      └──────────────────────────────────────────────┘      ",
  "                                                            ",
  "   .%@@%+:                                        :+%@@%.   ",
  "    #@*+%@+.                                    .+@%+*@#    ",
  "    =@* .#@+                                    +@#. *@=    ",
  "    :@%. .%@-                                  -@%. .%@:    ",
  "    .#@-  -@%:       .:-=++******++=-:.       :%@:  -@#.    ",
  "     =@#   =@%-   .-*#%%#@@#++++#@@#%%#*-.   -%@=   #@=     ",
  "     .%@-   -%@*-=%@#+:.+@#.    .#@+.:+#@%=-*@%-   -@%.     ",
  "      -@%:   .=#%@@-  .*@*.      .*@*.  -@@%#=.   .%@-      ",
  "       =@#.     :@%. -%@+.        .+@%- .%@:     .#@=       ",
  "        +@*.    :@#:*@#-            -#@*:#@:    .*@+        ",
  "        .*@*.  .#@%@%=.              .=%@%@#.  .*@*.        ",
  "          *@+.:#@@%=.                  .=%@@#:.+@*          ",
  "        :-=@@#@@*-.                      .-*@@#@@=-:        ",
  "      .*@%#@@@=.          .##..##.          .=@@@#%@*.      ",
  "      +@*. -@%..=-.       :@@..@@:       .-=..%@- .*@+      ",
  "      =@*  .@@.:%@%#******%@=  =@%******#%@%:.@@.  *@=      ",
  "      :@@. .@@..%@=+@@@@+*@%.  .%@*+@@@@+=@%..@@. .@@:      ",
  "       #@= .@%..%@-:*@@* :@%....%@: *@@*:=@%..%@. =@#       ",
  "       =@* .@@- -#%@%#*--%@=.##.=@%--*#%@%#- -@@. *@=       ",
  "       :@%..@@@+. .:=*#%%*: .@@. :*%%#*=:. .+@@@..%@:       ",
  "       .#@-.@@*@#:     :-=-..@@..-=-:     :#@#@@.-@#.       ",
  "        =@#:@%.-*: ..  =@%@%=@@=%@%@=  .. :*-.%@:#@=        ",
  "        .*%%@%.  :*%%#:.:.-%%@@%%-.:.:*%%#:  .%@%%*.        ",
  "          .-@@-  +@#=%@=-:::-::-:::-=%@=*@*  -@@-.          ",
  "            -@%- .*@*-#@@%@@%%%%@@%@@#:+@#: -%@-            ",
  "             -%@- .=@%-+@%@@=--=@@%@+:#@+. -@%-             ",
  "              :%@=  -@%:=@@-    -%@=.#@=  =@%:              ",
  "               :#@+  -@%..::=++=::. #@+  +@#:               ",
  "                .#@+. +@#+#%%#*%%%+*@* .+@#.                ",
  "                 .*@*. =*#+-.   :+#*=..*@*.                 ",
  "                  .+@#.      ..      .#@+.                  ",
  "                    =@%=:::=#%%#=:::=%@=                    ",
  "                     :*%@@@%*==*%@@@%*:                     ",
  "                                                     -hannya",
];

const loadingLines: string[] = [
  "> ./hannya",
  "...bypassing firewalls",
  "...spoofing MAC address",
  "...injecting shell payload",
  "...elevating privileges",
  "...accessing ~/portfolio",
  "✔ root access granted",
  "hannya@root:~#",
];

type Phase = "terminal" | "skeleton" | "done";

const Loader: React.FC<LoaderProps> = ({ children }) => {
  const [phase, setPhase] = useState<Phase>("terminal");
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (loaderRef.current) {
      loaderRef.current.scrollTop = loaderRef.current.scrollHeight;
    }
  }, [typedLines]);

  useEffect(() => {
    const typeInterval = setInterval(() => {
      if (currentLine < loadingLines.length) {
        const line = loadingLines[currentLine];
        if (charIndex < line.length) {
          const updatedLines = [...typedLines];
          updatedLines[currentLine] =
            (updatedLines[currentLine] || "") + line[charIndex];
          setTypedLines(updatedLines);
          setCharIndex(charIndex + 1);
        } else {
          setCurrentLine(currentLine + 1);
          setCharIndex(0);
        }
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          setPhase("skeleton");
          setTimeout(() => setPhase("done"), 1400);
        }, 800);
      }
    }, 10); // speed of each character

    return () => clearInterval(typeInterval);
  }, [charIndex, currentLine, typedLines]);

  return (
    <AnimatePresence mode="wait">
      {phase === "terminal" && (
        <motion.div
          key="terminal"
          className={styles.loader}
          ref={loaderRef}
          exit={{ opacity: 0, transition: { duration: 0.4 } }}
        >
          <pre>
            {asciiArt.map((line, idx) => (
              <div key={`ascii-${idx}`}>{line}</div>
            ))}
            {typedLines.map((line, idx) => (
              <div key={`typed-${idx}`}>{line}</div>
            ))}
          </pre>
        </motion.div>
      )}

      {phase === "skeleton" && (
        <motion.div
          key="skeleton"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Skeleton />
        </motion.div>
      )}

      {phase === "done" && (
        <motion.div
          key="content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;
