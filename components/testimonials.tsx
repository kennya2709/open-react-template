"use client";

import { useState } from "react";
import useMasonry from "@/utils/useMasonry";
import Image, { StaticImageData } from "next/image";
// Importar las imágenes de los testimonios
import TestimonialImg01 from "@/public/images/testimonial-01.jpg";
import TestimonialImg02 from "@/public/images/testimonial-02.jpg";
// (continúa con las demás importaciones...)

const testimonials = [
  // (testimonios como antes)
];

export default function Testimonials() {
  const masonryContainer = useMasonry();
  const [category, setCategory] = useState<number>(1);

  const handleWhatsAppClick = () => {
    const phoneNumber = "6181885645";
    const message = encodeURIComponent("Hola, me gustaría más información.");
    const url = `https://wa.me/${phoneNumber}?text=${message}`;
    window.open(url, "_blank");
  };

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6">
      <div className="border-t py-12 [border-image:linear-gradient(to_right,transparent,theme(colors.slate.400/.25),transparent)1] md:py-20">
        {/* Sección del encabezado */}
        <div className="mx-auto max-w-3xl pb-12 text-center">
          <h2 className="animate-[gradient_6s_linear_infinite] bg-[linear-gradient(to_right,theme(colors.gray.200),theme(colors.indigo.200),theme(colors.gray.50),theme(colors.indigo.300),theme(colors.gray.200))] bg-[length:200%_auto] bg-clip-text pb-4 font-nacelle text-3xl font-semibold text-transparent md:text-4xl">
            Contactate con nosotros
          </h2>
          <p className="text-lg text-indigo-200/65">
          Platica con nosotros tus ideas y dale respuesta a tus preguntas
          </p>
        </div>

        {/* Botón de WhatsApp */}
        <div className="flex justify-center pb-12">
          <button 
            className="inline-flex items-center justify-center rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            onClick={handleWhatsAppClick}
          >
            Contactar por WhatsApp
          </button>
        </div>

        {/* Resto del componente (masonry, testimonios, etc.) */}
      </div>
    </div>
  );
}
