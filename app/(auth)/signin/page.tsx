export const metadata = {
  title: "Sign In - Open PRO",
  description: "Page description",
};

import Link from "next/link";
import canvas from "./canvas.png"; // Usa el prefijo ./ para rutas locales

export default function SignIn() {
  return (
    <section>
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="py-12 md:py-20 text-center">
          <img src={canvas.src} alt="Canvas" className="mx-auto" />
        </div>
      </div>
    </section>
  );
}
