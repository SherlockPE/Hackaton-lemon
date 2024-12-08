# MedRecords
# Historial Clínico Descentralizado

MedRecords es una plataforma web basada en tecnología blockchain que permite a las personas conectar su identidad con su historial clínico. Con MedRecords, la información médica estará disponible de manera segura y accesible en cualquier parte del mundo, especialmente útil en casos de emergencia o al viajar.

Este repositorio contiene un proyecto diseñado para revolucionar la forma en que los historiales médicos son almacenados y compartidos. Basándonos en tecnologías modernas como WebAssembly (Wasm) y redes descentralizadas, buscamos garantizar la disponibilidad, seguridad y privacidad de los datos clínicos sin depender de servidores centralizados.  

---

## 🚀 Objetivo del Proyecto

MedRecords está diseñado para transformar la forma en que los historiales médicos son almacenados y compartidos. Nuestro objetivo es:

- **Acceso global:** Permitir a los usuarios consultar su historial médico en cualquier lugar del mundo, eliminando barreras geográficas.
- **Privacidad y seguridad:** Garantizar la protección de datos con tecnologías avanzadas de encriptación y un enfoque descentralizado.
- **Colaboración médica:** Facilitar el acceso rápido y seguro a información crítica para profesionales de la salud, mejorando diagnósticos y tratamientos en tiempo real.
---

## 🛠️ Tecnologías Utilizadas

Este proyecto combina herramientas y lenguajes avanzados para garantizar eficiencia y compatibilidad:  

- **WebAssembly (Wasm)**: Para garantizar un alto rendimiento y portabilidad.  
- **C**: Lenguaje utilizado para implementar las funcionalidades base del sistema.  
- **Stylus SDK**: Para interactuar con redes descentralizadas.  
- **Ethereum Rollup**: Para almacenar de forma segura la información en redes compatibles con contratos inteligentes.  

---

## 🌐 Requisitos Previos

Para trabajar con este proyecto, necesitarás:  

- **Clang**: Para compilar el código C.  
- **wasm-ld**: Enlazador para WebAssembly.  
- **wasm-strip**: Herramienta para optimizar el tamaño del archivo `.wasm`.  
- **Cargo Stylus**: CLI para interactuar con la red Stylus.  
- **npm**: Para ejecutar scripts adicionales.  

---

## 📂 Estructura del Proyecto

- **`contracts/`**: Contiene los contratos inteligentes escritos en C.  
- **`stylus-sdk-c/`**: Dependencias del SDK para Stylus.  
- **`include/`**: Archivos de cabecera para definir las funciones del proyecto.  

---

## 📜 Cómo Usar Este Proyecto

### 1. Compilación del Contrato  
Para compilar el contrato médico, ejecuta:  
```bash
make
