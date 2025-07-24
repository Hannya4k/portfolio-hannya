import React, { useState, useEffect, ReactNode, useRef } from "react";
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

const Loader: React.FC<LoaderProps> = ({ children }) => {
  const [showLoader, setShowLoader] = useState(true);
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
          setShowLoader(false);
          //   localStorage.setItem("hasLoaded", "true");
        }, 800);
      }
    }, 10); // speed of each character

    return () => clearInterval(typeInterval);
  }, [charIndex, currentLine, typedLines]);

  if (showLoader) {
    return (
      <div className={styles.loader} ref={loaderRef}>
        <pre>
          {asciiArt.map((line, idx) => (
            <div key={`ascii-${idx}`}>{line}</div>
          ))}
          {typedLines.map((line, idx) => (
            <div key={`typed-${idx}`}>{line}</div>
          ))}
        </pre>
      </div>
    );
  }

  return <>{children}</>;
};

export default Loader;
