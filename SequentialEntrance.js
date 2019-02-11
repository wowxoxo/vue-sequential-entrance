export default {
  functional: true,
  render(createElement, { props, data, children })
  {
    let delay = props.delay || 250;
    let tag = props.tag || "span";
    let animation = props.animation || "entranceFromRight";
    // let customClass = props.customClass; // first variant

    if(props.fromTop != undefined) animation = 'entranceFromTop'
    if(props.fromRight != undefined) animation = 'entranceFromRight'
    if(props.fromBottom != undefined) animation = 'entranceFromBottom'
    if(props.fromLeft != undefined) animation = 'entranceFromLeft'

    if (children) {
      children.forEach((child, index) => {
        child.data.staticStyle = {
          opacity: 0,
          animationFillMode: "forwards",
          animationDelay: index * delay + "ms"
        };
        child.data.staticClass += " " + animation;
      });
    }

    //// first variant
    // let classObj = {};

    // if (customClass) {
    //   classObj.class = [];
    //   classObj.class.push(customClass);
    // }

    // return createElement(tag, classObj, children);

    //// second variant
    return createElement(tag,{class: props.customClass},children);
  }
};
