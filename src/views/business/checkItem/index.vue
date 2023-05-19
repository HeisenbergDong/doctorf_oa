<template>
  <div class="app-container home flex-row">
    <el-col :span="18">
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never">
          {{ "患者信息" }}
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "基本信息" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="姓名" class="font14">
                <el-input
                  v-model="patientInfo.name"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-input
                  v-model="patientInfo.gender"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="年龄">
                <el-input
                  v-model="patientInfo.age"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="是否首次">
                <el-radio-group v-model="patientInfo.isFirstVisit">
                  <el-radio-button label="是"></el-radio-button>
                  <el-radio-button label="否"></el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never">
          {{ "特殊检查室" }}
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "视力检查" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              label-position="right"
              label-width="110px"
              :model="patientInfo"
            >
              <el-row>
                <el-row class="flex-row">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "远视力左眼：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "远视力右眼：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "近视力左眼：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "近视力右眼：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-row>
              <el-row class="flex-row">
                <el-col :span="10">
                  <el-col>
                    <el-form-item label="镜片划痕：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">( - )</el-checkbox>
                        <el-checkbox label="">( + )</el-checkbox>
                        <el-checkbox label="">( ++ )</el-checkbox>
                        <el-checkbox label="">( +++ )</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-col>
                <el-col :span="10">
                  <el-col>
                    <el-form-item label="镜架：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">( - )</el-checkbox>
                        <el-checkbox label="">( + )</el-checkbox>
                        <el-checkbox label="">( ++ )</el-checkbox>
                        <el-checkbox label="">( +++ )</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-col>
              </el-row>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "主观前四项" }}</span>
            </div>
          </template>
          <div class="body">
            <el-row>
              <el-form
                :inline="true"
                label-position="right"
                label-width="80px"
                :model="patientInfo"
              >
                <el-form-item label="辐辏" class="font14">
                  <el-select v-model="patientInfo.name" placeholder="请选择">
                    <el-option
                      v-for="item in convergeOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
                <el-form-item label="眼位">
                  <el-input
                    v-model="patientInfo.gender"
                    placeholder="请输入"
                    class="mr24 w180i"
                  ></el-input>
                  <div style="position: absolute; top: -30; right: 180px">
                    /33cm;
                  </div>
                  <el-input
                    v-model="patientInfo.gender"
                    placeholder="请输入"
                    class="ml24 w180i"
                  ></el-input>
                  <div style="position: absolute; top: 0; right: -38px">
                    /6cm;
                  </div>
                </el-form-item>
                <el-form-item label="主导眼">
                  <el-select v-model="patientInfo.name" placeholder="请选择">
                    <el-option
                      v-for="item in euphoropsiaOptions"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    >
                    </el-option>
                  </el-select>
                </el-form-item>
              </el-form>
            </el-row>
            <el-row class="card-btn">
              <el-button>重置</el-button>
              <el-button type="primary">提交</el-button>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "电脑验光" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="上传附件" class="font14" style="margin-bottom: 0px;">
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "角膜地形图" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="上传附件" class="font14" style="margin-bottom: 0px;">
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-col>
    <el-col :span="6">
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "挂号列表" }}</span>
            </div>
          </template>
          <div class="body">
            <div v-for="(item, index) in patientList" :key="index">
              <div class="patient">
                {{ `${item.label}挂号排序${index + 1}` }}
              </div>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-col>
  </div>
</template>
  
  <script setup name="Index">
import icon_time from "/src/assets/icons/svg/time.svg";
import { getCache } from "@/api/monitor/cache";
import * as echarts from "echarts";
import UploadFile from "/src/components/FileUpload/index.vue";

const patientInfo = ref({
  name: "",
  gender: "",
  age: "",
  isFirstVisit: "是",
  list: [],
});
const convergeOptions = ref([
  {
    value: "良",
    label: "良",
  },
  {
    value: "欠",
    label: "欠",
  },
]);
const euphoropsiaOptions = ref([
  {
    value: "右",
    label: "右",
  },
  {
    value: "左",
    label: "左",
  },
]);

const patientList = ref([
  {
    value: "患者A",
    label: "患者A",
  },
  {
    value: "患者B",
    label: "患者B",
  },
  {
    value: "患者C",
    label: "患者C",
  },
  {
    value: "患者D",
    label: "患者D",
  },
  {
    value: "患者E",
    label: "患者E",
  },
]);
console.log("patientList", patientList.value.lenght);
const cache = ref([]);
const commandstats = ref(null);
const usedmemory = ref(null);
const { proxy } = getCurrentInstance();

// const version = ref("3.8.5");
const dataList = ref([
  {
    title: "预约",
    name: "预约数",
    icon: icon_time,
    count: 10,
  },
  {
    title: "提醒",
    name: "提醒数",
    icon: icon_time,
    count: 10,
  },
  {
    title: "今日",
    name: "已完成",
    icon: icon_time,
    count: 10,
  },
]);
function getList() {
  proxy.$modal.loading("正在加载缓存监控数据，请稍候！");
  getCache().then((response) => {
    proxy.$modal.closeLoading();
    cache.value = response.data;

    const commandstatsIntance = echarts.init(commandstats.value, "macarons");
    commandstatsIntance.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "命令",
          type: "pie",
          roseType: "radius",
          radius: [15, 95],
          center: ["50%", "38%"],
          data: response.data.commandStats,
          animationEasing: "cubicInOut",
          animationDuration: 1000,
        },
      ],
    });

    const usedmemoryInstance = echarts.init(usedmemory.value, "macarons");
    usedmemoryInstance.setOption({
      tooltip: {
        formatter: "{b} <br/>{a} : " + cache.value.info.used_memory_human,
      },
      series: [
        {
          name: "峰值",
          type: "gauge",
          min: 0,
          max: 1000,
          detail: {
            formatter: cache.value.info.used_memory_human,
          },
          data: [
            {
              value: parseFloat(cache.value.info.used_memory_human),
              name: "内存消耗",
            },
          ],
        },
      ],
    });
  });
}

getList();

// function goTarget(url) {
//   window.open(url, "__blank");
// }
</script>
  
  <style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}

:deep(.el-card) {
  border: none;
}

.patient {
  font-size: 14px;
  line-height: 14px;
  padding: 8px 0 20px 0;
}
</style>
  
  