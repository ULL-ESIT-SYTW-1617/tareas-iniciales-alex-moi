### Modificar la documentación
Para modificar la documentación solo hay que añadir o modificar uno de los fichero .md existentes dentro de la carpeta doc del proyecto, puedes consultar la sintasis desde [Markdown Guide](https://guides.github.com/features/mastering-markdown/)

Puedes descargar el editor de GitBook para tu sistema operativo desde https://github.com/GitbookIO/editor-legacy/releases una vez instalada solo tienes que abrir la carpeta doc del proyecto con la app.



### Actualizar documentación

Para facilitar la integración con GitBook se ha preparado el shell script ./doc-build.sh que realiza lo siguiente:

* Añade en el README.md la versión del pom de tu proyecto o la versión indicada como parámetro y la fecha actual
* Genera páginas html
* Genera PDF

Por los que si tienes instalado GitBook y Calibre en tu equipo según lo explicado anteriormente puedes ejecutar el shell script doc-build.sh en tu equipo.

````
./doc-build.sh
````

Puedes insdicar la versión de la documentación a generar

````
./doc-build.sh 1.0.1
````