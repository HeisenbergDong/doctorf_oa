<template>
  <div class="main">
    <div class="header flex-row just-between align-center">
      <div :span="8" class="font24 fontW600">范大夫</div>
      <div :span="8" class="font28 fontW600">诊区等候列表</div>
      <div :span="8" class="font20 fontW600">
        <span>{{ nowDate }}</span>
        <span>{{ nowTime }}</span>
      </div>
    </div>
    <div class="middle flex-column">
      <el-row class="title flex-row text-center font28">
        <el-col :span="8">诊室</el-col>
        <el-col :span="8">医生</el-col>
        <el-col :span="8">等候就诊</el-col>
      </el-row>
      <el-row class="contant flex-row text-center font28" v-for="(item,index) in dataList" :key="index">
        <el-col :span="8">
          {{ item.consultingRoom }}
        </el-col>
        <el-col :span="8">
          {{ item.doctor }}
        </el-col>
        <el-col :span="8">
          {{ item.person }}
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script setup name="Index">
import moment from "moment";
const nowTime = ref("");
const nowDate = ref("");
const dataList = ref([
  {
    consultingRoom: "第一诊室",
    doctor:"医生A",
    person: "患者A",
  },
  {
    consultingRoom: "第一诊室",
    doctor:"医生B",
    person: "患者B",
  },
  {
    consultingRoom: "第一诊室",
    doctor:"医生C",
    person: "患者C",
  },
  {
    consultingRoom: "第一诊室",
    doctor:"医生D",
    person: "患者D",
  },
  {
    consultingRoom: "第一诊室",
    doctor:"医生E",
    person: "患者E",
  },
  {
    consultingRoom: "第一诊室",
    doctor:"医生F",
    person: "患者F",
  },
  {
    consultingRoom: "第一诊室",
    doctor:"医生G",
    person: "患者G",
  },
  {
    consultingRoom: "第一诊室",
    doctor:"医生H",
    person: "患者H",
  },
])

onMounted(() => {
  setInterval(() => {
    getNowDate();
    getNowTime();
  }, 1000);
});

function getNowDate() {
  const week = moment().day();
  let data = "";
  switch (week) {
    case 1:
      data = "星期一";
      break;
    case 2:
      data = "星期二";
      break;
    case 3:
      data = "星期三";
      break;
    case 4:
      data = "星期四";
      break;
    case 5:
      data = "星期五";
      break;
    case 6:
      data = "星期六";
      break;
    case 0:
      data = "星期日";
      break;
  }
  const date = moment().format("YYYY-MM-DD");
  data += " " + date;
  nowDate.value = data;
}

function getNowTime() {
  const time = moment().format("HH:mm:ss");
  nowTime.value = " " + time;
}
</script>
<style lang="scss">
.main {
  position: relative;
  width: 100%;
  height: calc(100vh - 84px);
  box-sizing: border-box;
  padding-bottom: 0;
  display: flex;
  flex-flow: column;
  position: relative;
  // background: #003f97;

  background: linear-gradient(
    to bottom,
    rgba(1, 30, 85, 0.6) 0%,
    rgba(1, 30, 85, 0.8) 30%,
    rgba(1, 30, 85, 1) 100%
  );

  display: flex;
  flex-flow: column;
  .header {
    height: 9.24vh;
    color: rgb(43, 101, 148);
    background-color: #fff;
    padding: 0 24px 0 24px;
  }
  .middle{
    color: rgb(20, 190, 212);
    padding: 0 24px 0 24px;
    .title{
      padding: 20px;
      border: 1px solid rgb(20, 190, 212);
      margin: 20px 0 0 0;
    }
    .contant{
      padding: 20px;
      border-left: 1px solid rgb(20, 190, 212);
      border-right: 1px solid rgb(20, 190, 212);
      border-bottom: 1px solid rgb(20, 190, 212);

    }
  }
}
</style>