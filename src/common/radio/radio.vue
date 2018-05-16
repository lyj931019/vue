<style lang="scss" scoped>
  /*========================================*/
  /* radio 单选框的样式 */
  /*========================================*/
  //.radio{
  //  display: inline-block;
  //  height:30px;
  //  width: 120px;
  //}
  .rdo{
    width: 20px;
    height: 0;
    position: relative;
    /*border-radius: 50%;*/
    &:before,&:after {
      content: '';
      display: block;
      position: absolute;
      border-radius: 50%;
      transition: .3s ease;
    }
    &:before {
      //top: 0px;
      top: -15px;
      left: 0px;
      width: 18px;
      height: 18px;
      background-color: #fff;
      border: 1px solid #000;
    }
    &:after {
      //top: 5px;
      top: -10px;
      left: 5px;
      width: 10px;
      height: 10px;
      background-color: #fff;
    }
    &:checked:before{
      border-color: $primary;
    }
    &:checked:after{
      background-color:$primary;
    }
    +span{

    }

  }
</style>

<template>
  <label class="">
    <input type="radio" class="rdo"
           :name="name"
           :disabled="disabled"
           :checked="currentValue"
           @change="change">
    <slot></slot>
  </label>
</template>

<script>
  export default {
    name:'radio',
    props:{
      value: {
        type: [String, Number, Boolean],
        default: false
      },
      trueValue: {
        type: [String, Number, Boolean],
        default: true
      },
      falseValue: {
        type: [String, Number, Boolean],
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      name:{
        type:String
      }
    },
    data(){
      return {
        currentValue: this.value
      }
    },
    methods:{
      change (event) {
        if (this.disabled) {
          return false;
        }

        const checked = event.target.checked;
        this.currentValue = checked;

        const value = checked ? this.trueValue : this.falseValue;
        this.$emit('input', value);
        this.$emit('on-change', value);
//        this.dispatch('FormItem', 'on-form-change', value);

      },
      updateValue () {
        this.currentValue = this.value === this.trueValue;
      }
    },
    mounted () {
      this.updateValue();
    },
    watch:{
      value (val) {
        if (val === this.trueValue || val === this.falseValue) {
          this.updateValue();
        } else {
          throw 'Value should be trueValue or falseValue.';
        }
      }
    }
  }
</script>
