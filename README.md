# Class based vs Function based components in React

## Why do we need Class based components?

- After **React 16.8 (2019)**, **React hooks** was introduced and in most modern React projects, you would pretty much work with Functional Components only. You might never build a single class-based Component.

- Before that, **Functional Component** were considered as **state-less**, was generally used for simpler components that would just display info passed into it, whereas a Class Component was what you would use when you needed to store state in your component.

- You still will find class-based components in the wild, for example if you are working with a code-base which has been around 5+ years, you will see mostly class-based components. So you need to know how everything works in a class-based component in order to interact with it.

## Difference between class and functional components

<table>
<tr>
<td><strong> Functional Components <strong/></td>
<td><strong> Class-based Components <strong/></td>
</tr>
<tr>
<td>Components are regular JavaScript functions which return renderable results (typically JSX)</td>  
<td>Components can also be defined as JS classes where a render() method  defines the to-be-rendered output </td>
</tr>
<tr>
<td>

```javascript
function Product(props) {
  return <h2>A Product!</h2>;
}
```

</td>
<td>

```javascript
class Product extends Component {
  render() {
    return <h2>A Product!</h2>
  }
```

</td>
</tr>
<tr>
<td>
```javascript
const [state,setState] = useState(0)
```
</td>
<td>
```javascript
constructor(){
  super();
   this.state = {counter:0};
}
```
</td>
</tr>
</table>
## Counter App Implication
### Functional based component
![image](https://user-images.githubusercontent.com/90669430/183123373-1a622209-3f2d-489b-a693-1a9434e84ee9.png)
### Class based component
![image](https://user-images.githubusercontent.com/90669430/183124147-a6f13f72-7f96-4a85-8638-058b6edfa104.png)
