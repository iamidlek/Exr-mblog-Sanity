``` 
*[_type == 'home'][0]{'mainPostUrl': mainPost -> slug.current}
``` //
```
*[_type == 'post']{
  title, 
  subtitle, 
  createdAt, 
  'content': content[]{
  	...,
  	...select(_type == 'imageGallery' => {'images': images[]{..., 'url': asset -> url}})
	},
  'slug': slug.current,
  'thumbnail': {
    'alt': thumbnail.alt,
    'imageUrl': thumbnail.asset -> url
  },
  'author': author -> {
    name,
    role,
    'image': image.asset -> url
  },
  'tag': tag -> {
    title,
    'slug': slug.current
  }
}
```;
