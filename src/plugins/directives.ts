import Vue from "vue";

const bg={
    bind(el:any, binding:any){
        let delay = 0
          if(binding.modifiers["delay"]){
            delay =2000
        }
        const arg  = binding.arg as any
        setTimeout(() => {
            el.style[arg] = binding.value
        }, delay);
    }
  }

const directives = {
    bg,
};

(Object.keys(directives) as Array<keyof typeof directives>).forEach((key) => {
    Vue.directive(key, directives[key]);
});
