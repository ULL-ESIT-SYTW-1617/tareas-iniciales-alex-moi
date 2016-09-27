# Instalación de GitBook

Si tienes instalado en tu equipo una versión inferior a la 2.0.0 desistala la antigua versión de GitBook con el siguiente comando.

###### Desistalar GitBook con NPM

````
$ npm uninstall -g gitbook
````

###### Instalar versión de GitBook con NPM

```
$ npm install -g gitbook-cli
```

###### Instalación de Calibre

Se necesita tener instalada la app Calibre para poder generar la documentación en formato pdf.

* Descargar desde: http://code.calibre-ebook.com/dist/osx
* Instalar Calibre
* Añadir Calibre al PATH (puedes añadirlo a ~/.zshrc)

````
export PATH=$PATH:/Applications/calibre.app/Contents/MacOS
````