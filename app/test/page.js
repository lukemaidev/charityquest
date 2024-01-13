import Link from "next/link";
import { useThemeContext } from "../context/theme";

export default function Home() {
  const [theme, setTheme] = useThemeContext();
  return (
    <div>
      <h1>Welcome to the Home page</h1>
      <Link href="/about">
        <a>About</a>
      </Link>
      <p>Current mode: {theme}</p>
      <button
        onClick={() => {
          theme == "light" ? setTheme("dark") : setTheme("light");
        }}
      >
        Toggle mode
      </button>
    </div>
  );
}