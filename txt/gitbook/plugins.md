
##### Añadir imágenes

Puedes añadirlas dentro de la carpeta resources. Añadir dentro de esta carpeta el fuente de la imagen por si es necesario modificarla.

Puedes añadir la imágenes con el siguiente código

```
![Image demo](resources/keep-calm-portada.jpg)
```

Si añades una nueva sección al documento recuerda que tienes que añadirla en el fichero ./doc/SUMMARY.md si no utilizas el editor de GitBook.



#Gitbook Plugins

Los **plugins** en Gitbook nos permiten añadir funcionalidades nuevas a nuestro libro. En esta página podemos encontrar algunos **plugins** interesantes [GitBook Plugins](https://plugins.gitbook.com/).

## Instalación
Deberemos de seguir los siguientes pasos:

* Añadir al book.json el plugin:  **"plugins": ["plugin_name"]**
* ejecutar *gitbook install* 

##Ejemplos

En este caso, vamos a utilizar como ejemplo el uso de un plugins como es el de **Youtube**

{% youtube %} https://www.youtube.com/watch?v=cyohHyQl-kc {% endyoutube %}

Ahora utilizamos como ejemplo el plugin **codeeditor**

{% codeeditor   src='../HTML/4Elements/forms/input.html',
                language='javascript', readOnly='true', theme='github' %}
{% endcodeeditor %}