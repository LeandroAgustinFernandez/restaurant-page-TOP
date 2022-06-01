const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: {
          loader: "file-loader",
          options: {
            nombre: "[nombre]. [ext]", // El nombre de la imagen aquí debe ser 1.jpg
            outputPath: "images/", // Coloca las imágenes generadas en la carpeta de imágenes
            limit: 2048, // Si la imagen es menor que 2048, se empaquetará en el paquete, y si es mayor que la imagen se generará en el directorio dist
          },
        },
      },
    ],
  },
};
