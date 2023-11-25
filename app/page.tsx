import { Link } from "@nextui-org/react";
import { Inter } from "next/font/google";
import styles from "./page.module.css";
import { Button } from "@nextui-org/button";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <h1>Home Page</h1>
      <p>
        <Link isBlock showAnchorIcon href="/users" color="foreground">
          Users
        </Link>
        <Link isBlock showAnchorIcon href="/products" color="foreground">
          products
        </Link>
      </p>
      <div>
        <Button>Click me</Button>
      </div>
    </main>
  );
}
