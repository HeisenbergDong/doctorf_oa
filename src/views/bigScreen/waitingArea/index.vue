<template>
  <!-- 候诊区 -->
  <div>
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
          <el-col :span="6">诊室</el-col>
          <el-col :span="6">医生</el-col>
          <el-col :span="6">等候就诊</el-col>
          <el-col :span="6">状态</el-col>
        </el-row>
        <div>
          <el-row
            class="flex-row text-center font28"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <el-col class="contant" :span="6" v-if="index < 8">
              {{ item.room }}
            </el-col>
            <el-col class="contant" :span="6" v-if="index < 8">
              {{ item.adjustDocName }}
            </el-col>
            <el-col class="contant" :span="6" v-if="index < 8">
              {{ item.patientName }}
            </el-col>
            <el-col class="contant" :span="6" v-if="index < 8">
              {{
                item.patientStatus === "0"
                  ? "排队中"
                  : item.patientStatus === "1"
                  ? "进行中"
                  : ""
              }}
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup name="Index">
import moment from "moment";
import { listWait } from "@/api/system/wait";
import useSettingsStore from '@/store/modules/settings';

const settingsStore = useSettingsStore();
const nowTime = ref("");
const nowDate = ref("");
const dataList = ref([]);

const data = reactive({
  form: {},
  queryParams: {
    pageNum: 1,
    pageSize: 10,
    patientId: null,
    patientName: null,
    patientPhone: null,
    patientStatus: null,
    waitTime: null,
    room: null,
    adjustTime: null,
    adjustDocId: null,
    adjustDocName: null,
    receptionDocId: null,
    receptionDocName: null,
    assignDocId: null,
    assignDocName: null,
    assignContent: null,
    parentId: null,
  },
});
const { queryParams } = toRefs(data);
const { proxy } = getCurrentInstance();

onMounted(() => {
  setInterval(() => {
    getNowDate();
    getNowTime();
  }, 1000);
});
watch(() => settingsStore.dispatchState, () => {
  getList();
})
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

/** 查询列表 */
function getList() {
  listWait(proxy.addDateRange(queryParams.value)).then((response) => {
    dataList.value = response.rows.sort(
      (a, b) => new Date(a.waitTime).getTime() - new Date(b.waitTime).getTime()
    );
  });
}
getList();
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
  .middle {
    color: rgb(20, 190, 212);
    padding: 0 24px 0 24px;
    .title {
      padding: 20px;
      border: 1px solid rgb(20, 190, 212);
      margin: 20px 0 0 0;
    }
    .contant {
      padding: 1.35%;
      border-left: 1px solid rgb(20, 190, 212);
      border-right: 1px solid rgb(20, 190, 212);
      border-bottom: 1px solid rgb(20, 190, 212);
    }
  }
}
</style>