<template>
  <div>
    <el-select
      v-model="value9"
      multiple
      filterable
      remote
      reserve-keyword
      placeholder="请输入关键词"
      @change="change"
      :remote-method="remoteMethod"
      :loading="loading"
    >
      <el-option v-for="item in options4" :key="item.value" :label="item.label" :value="item.value"></el-option>
    </el-select>

    <hr>

    <el-tooltip :content="'Switch value: ' + value5" placement="top">
      <el-switch
        v-model="value5"
        active-color="#13ce66"
        inactive-color="#ff4949"
        active-value="100"
        inactive-value="0"
        :active-text="stext"
        :width="80"
        @change="switchHange"
      ></el-switch>
    </el-tooltip>
    <el-button :plain="true" @click="open2">成功</el-button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      stext: "测试",
      swidth: 110,
      value5: "60",
      options4: [],
      value9: [],
      list: [],
      loading: false,
      states: [
        "Alabama",
        "Alaska",
        "Arizona",
        "Arkansas",
        "California",
        "Colorado",
        "Connecticut",
        "Delaware",
        "Florida",
        "Georgia",
        "Hawaii",
        "Idaho",
        "Illinois",
        "Indiana",
        "Iowa",
        "Kansas",
        "Kentucky",
        "Louisiana",
        "Maine",
        "Maryland",
        "Massachusetts",
        "Michigan",
        "Minnesota",
        "Mississippi",
        "Missouri",
        "Montana",
        "Nebraska",
        "Nevada",
        "New Hampshire",
        "New Jersey",
        "New Mexico",
        "New York",
        "North Carolina",
        "North Dakota",
        "Ohio",
        "Oklahoma",
        "Oregon",
        "Pennsylvania",
        "Rhode Island",
        "South Carolina",
        "South Dakota",
        "Tennessee",
        "Texas",
        "Utah",
        "Vermont",
        "Virginia",
        "Washington",
        "West Virginia",
        "Wisconsin",
        "Wyoming"
      ]
    };
  },
  mounted() {
    this.list = this.states.map(item => {
      return { value: item, label: item };
    });
    console.log("this", this.$message);
    console.log('process.env', process.env);
  },
  methods: {
    open2() {
      this.$message({
        message: 'Using mustaches: <span style="color: red">This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.This should be red.</span>',
        type: "success",
        duration: 300000,
        center: true,
        showClose: true,
        dangerouslyUseHTMLString: true,
        // iconClass: 'el-icon-refresh el-message__icon',
        onClose(el) {
          console.log('el', el);
        }
      });

      // vNode
      // const h = this.$createElement;
      // this.$message({
      //   message: h("p", null, [
      //     h("span", null, "内容可以是 "),
      //     h("i", { style: "color: teal" }, "VNode")
      //   ]),
      //   duration: 300000,
      //   showClose: true
      // });
    },
    remoteMethod(query) {
      if (query !== "") {
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.options4 = this.list.filter(item => {
            return item.label.toLowerCase().indexOf(query.toLowerCase()) > -1;
          });
        }, 200);
      } else {
        this.options4 = [];
      }
    },
    change(res) {
      console.log("res", res);
    },
    switchHange(val) {
      console.log("switch", val);
    }
  }
};
</script>


