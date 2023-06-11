<template>
  <section>
    <!-- 检查项目 -->
    <div class="app-container home flex-row">
      <el-col :span="18">
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="never"> 患者信息 </el-card>
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
          <el-card class="font18 fontW600" shadow="never"> 特殊检查室 </el-card>
        </el-col>
        <el-col class="card-box">
          <SightTest :id="id" />
        </el-col>
        <el-col class="card-box">
          <SubjectiveFour :id="id" />
        </el-col>
        <el-col class="card-box">
          <ComputerRefraction :id="id" />
        </el-col>
        <el-col class="card-box">
          <CorneaTopography :id="id" />
        </el-col>
        <el-col class="card-box">
          <BiometricInstrument :id="id" />
        </el-col>
        <el-col class="card-box">
          <Endothelial :id="id" />
        </el-col>
        <el-col class="card-box">
          <MRT :id="id" />
        </el-col>
        <el-col class="card-box">
          <DryEyeTest :id="id" />
        </el-col>
        <el-col class="card-box">
          <FundusTest :id="id" />
        </el-col>
        <el-col class="card-box">
          <IOP :id="id" />
        </el-col>
        <el-col class="card-box">
          <UpComputerRefraction :id="id" />
        </el-col>
        <el-col class="card-box">
          <UpCorneaTopography :id="id" />
        </el-col>
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="never"> 验光室 </el-card>
        </el-col>
        <el-col class="card-box">
          <SightTestRoom :id="id" />
        </el-col>
        <el-col class="card-box">
          <Skiascopy :id="id" />
        </el-col>
        <el-col class="card-box">
          <VisualFunctionTest :id="id" />
        </el-col>
        <el-col class="card-box">
          <SubjectiveFourRoom :id="id" />
        </el-col>
        <el-col class="card-box">
          <SubjectiveRefraction :id="id" />
        </el-col>
        <el-col class="card-box">
          <TryOn :id="id" />
        </el-col>
        <el-col class="card-box">
          <UpSubjectiveRefraction :id="id" />
        </el-col>
        <el-col class="card-box">
          <UpSkiascopy :id="id" />
        </el-col>
        <el-col class="card-box">
          <Glasses :id="id" />
        </el-col>
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="never">
            诊室1-1 诊室1-2 诊室3-1 诊室3-2
          </el-card>
        </el-col>
        <el-col class="card-box">
          <SlitLamp :id="id" />
        </el-col>
        <el-col class="card-box">
          <handlingSuggestion :id="id" />
        </el-col>
        <el-col class="card-box">
          <FundusTestRoom :id="id" />
        </el-col>
        <el-col class="card-box">
          <skiascopyRoom :id="id" />
        </el-col>
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="never"> 摘戴室 </el-card>
        </el-col>
        <el-col class="card-box">
          <TryOnRoom :id="id" />
        </el-col>
        <el-col class="card-box">
          <SliceExtraction :id="id" />
        </el-col>
        <el-col class="card-box">
          <Train :id="id" />
        </el-col>
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="never"> 咨询室 </el-card>
        </el-col>
        <el-col class="card-box">
          <WrittenConsent :id="id" />
        </el-col>
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="never"> 其他单据 </el-card>
        </el-col>
        <el-col class="card-box">
          <Documents :id="id" />
        </el-col>
      </el-col>

      <!-- right -->
      <el-col :span="6">
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="never"> 挂号列表 </el-card>
        </el-col>
        <el-col class="card-box">
          <el-card class="update-log" shadow="never">
            <template v-slot:header>
              <div class="clearfix">
                <span class="font14">{{ "患者列表" }}</span>
              </div>
            </template>
            <div class="body">
              <div v-for="(item, index) in patientList" :key="index">
                <div class="flex-row just-between text-center">
                  <div class="patient">
                    {{ `${item.label}挂号排序${index + 1}` }}
                  </div>
                  <div>
                    <el-button style="height: 28px" type="text">选择</el-button>
                  </div>
                </div>
                <el-divider v-if="index !== 4"></el-divider>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="never"> 指派 </el-card>
        </el-col>
        <el-col class="card-box">
          <el-card class="update-log" shadow="never">
            <template v-slot:header>
              <div class="clearfix">
                <span class="font14">{{ "指派医生" }}</span>
              </div>
            </template>
            <div class="body">
              <el-form label-position="right" :model="patientInfo">
                <el-form-item label="医生" class="font14">
                  <el-select
                    v-model="patientInfo.selectDoc"
                    placeholder="请选择"
                    clearable
                    class="w100i"
                  >
                    <el-option
                      v-for="item in docOption"
                      :key="item.value"
                      :label="item.label"
                      :value="item.value"
                    />
                  </el-select>
                </el-form-item>
              </el-form>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary" @click="gotoAssign">指派</el-button>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-col>
    </div>
    <el-backtop></el-backtop>
  </section>
</template>

<script setup name="Index">
import icon_time from "/src/assets/icons/svg/time.svg";
import UploadFile from "/src/components/FileUpload/index.vue";
import SightTest from "./components/special-examination/sightTest.vue";
import SubjectiveFour from "./components/special-examination/subjectiveFour.vue";
import ComputerRefraction from "./components/special-examination/computerRefraction.vue";
import CorneaTopography from "./components/special-examination/corneaTopography.vue";
import BiometricInstrument from "./components/special-examination/biometricInstrument.vue";
import Endothelial from "./components/special-examination/endothelial.vue";
import MRT from "./components/special-examination/MRT.vue";
import DryEyeTest from "./components/special-examination/dryEyeTest.vue";
import FundusTest from "./components/special-examination/fundusTest.vue";
import IOP from "./components/special-examination/IOP.vue";
import UpComputerRefraction from "./components/special-examination/upComputerRefraction.vue";
import UpCorneaTopography from "./components/special-examination/upCorneaTopography.vue";
import SightTestRoom from "./components/optometry-room/sightTestRoom.vue";
import Skiascopy from "./components/optometry-room/skiascopy.vue";
import VisualFunctionTest from "./components/optometry-room/visualFunctionTest.vue";
import SubjectiveFourRoom from "./components/optometry-room/subjectiveFourRoom.vue";
import SubjectiveRefraction from "./components/optometry-room/subjectiveRefraction.vue";
import TryOn from "./components/optometry-room/tryOn.vue";
import UpSubjectiveRefraction from "./components/optometry-room/upSubjectiveRefraction.vue";
import UpSkiascopy from "./components/optometry-room/upSkiascopy.vue";
import Glasses from "./components/optometry-room/glasses.vue";
import SlitLamp from "./components/consulting-room/slitLamp.vue";
import handlingSuggestion from "./components/consulting-room/handlingSuggestion.vue";
import FundusTestRoom from "./components/consulting-room/fundusTestRoom.vue";
import skiascopyRoom from "./components/consulting-room/skiascopyRoom.vue";
import TryOnRoom from "./components/dressing-room/tryOnRoom.vue";
import SliceExtraction from "./components/dressing-room/sliceExtraction.vue";
import Train from "./components/dressing-room/train.vue";
import WrittenConsent from "./components/advisory-room/writtenConsent.vue";
import Documents from "./components/offer-document/documents.vue";
const id = ref("24");
const patientInfo = ref({
  name: "",
  gender: "",
  age: "",
  isFirstVisit: "是",
  list: [],
  selectIop: "",
  selectDoc: "",
  slecetTag: [],
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
const IopOptions = ref([
  {
    value: "Tn-3",
    label: "Tn-3",
  },
  {
    value: "Tn-2",
    label: "Tn-2",
  },
  {
    value: "Tn-1",
    label: "Tn-1",
  },
  {
    value: "Tn",
    label: "Tn",
  },
  {
    value: "Tn+1",
    label: "Tn+1",
  },
  {
    value: "Tn+2",
    label: "Tn+2",
  },
  {
    value: "Tn+3",
    label: "Tn+3",
  },
]);
const symbolOptions = ref([
  {
    value: "+",
    label: "+",
  },
  {
    value: "-",
    label: "-",
  },
  {
    value: "±",
    label: "±",
  },
]);
const numOptions = ref([
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
]);
const unitOptions = ref([
  {
    value: "1",
    label: "右眼抑制",
  },
  {
    value: "2",
    label: "左眼抑制",
  },
  {
    value: "3",
    label: "正常",
  },
]);
const tensionOptions = ref([
  {
    value: "1",
    label: "正常",
  },
  {
    value: "2",
    label: "紧张",
  },
  {
    value: "3",
    label: "松弛",
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
const docOption = ref([
  {
    value: "0",
    label: "医生A",
  },
  {
    value: "1",
    label: "医生B",
  },
  {
    value: "2",
    label: "医生C",
  },
]);
const textarea = ref("");
const labelPosition = ref(true);

function typeOnChange(value) {
  if (!value !== value) {
    patientInfo.value.selectIop = "";
  }
  console.log("first", value, patientInfo.value.selectIop);
}

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

function gotoAssign() {
  proxy.$modal.msgSuccess("指派成功");
  patientInfo.value.selectDoc = "";
}

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

:deep(.el-input__wrapper) {
  width: 180px;
}

.patient {
  font-size: 14px;
  line-height: 14px;
  padding: 8px 0 10px 0;
}
:deep(.el-divider--horizontal) {
  margin: 12px 0;
}
</style>
