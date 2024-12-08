# Historial Clínico Descentralizado

**Queremos guardar el historial clínico de una persona para que este sea accesible a través de todo el mundo de forma descentralizada al viajar.**  

Este repositorio contiene un proyecto diseñado para revolucionar la forma en que los historiales médicos son almacenados y compartidos. Basándonos en tecnologías modernas como WebAssembly (Wasm) y redes descentralizadas, buscamos garantizar la disponibilidad, seguridad y privacidad de los datos clínicos sin depender de servidores centralizados.  

---

## 🚀 Objetivo del Proyecto

Crear un sistema que permita a los pacientes:  
1. **Acceder a su historial médico en cualquier lugar del mundo** mediante una red descentralizada.  
2. **Garantizar la privacidad de sus datos** con tecnologías de encriptación avanzada.  
3. **Facilitar la colaboración médica internacional**, asegurando que los profesionales de la salud tengan acceso rápido y seguro a la información crítica.

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
