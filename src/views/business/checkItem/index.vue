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
              <el-form :inline="true" label-position="right" label-width="80px" :model="patientInfo">
                <el-form-item label="姓名" class="font14">
                  <el-input v-model="patientInfo.patientName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="手机号">
                  <el-input v-model="patientInfo.patientPhone" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="身份证号">
                  <el-input v-model="patientInfo.patientIdCard" placeholder="请输入"></el-input>
                </el-form-item>
                <!-- <el-form-item label="是否首次">
                  <el-radio-group v-model="patientInfo.isFirstVisit">
                    <el-radio-button label="是"></el-radio-button>
                    <el-radio-button label="否"></el-radio-button>
                  </el-radio-group>
                </el-form-item> -->
              </el-form>
            </div>
          </el-card>
        </el-col>
        <el-col v-if="id">
          <el-col class="card-box">
            <el-card class="font18 fontW600" shadow="never">
              特殊检查室
            </el-card>
          </el-col>
          <el-col class="card-box">
            <SightTest :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <SubjectiveFour :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <ComputerRefraction :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <CorneaTopography :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <BiometricInstrument :id="id" />
          </el-col>
          <el-col class="card-box">
            <Endothelial :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <MRT :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <DryEyeTest :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <FundusTest :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <IOP :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <UpComputerRefraction :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <UpCorneaTopography :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <el-card class="font18 fontW600" shadow="never"> 验光室 </el-card>
          </el-col>
          <el-col class="card-box">
            <SightTestRoom :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <Skiascopy :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <VisualFunctionTest :id="id" />
          </el-col>
          <el-col class="card-box">
            <SubjectiveFourRoom :id="id" :data="formData" @update="updateFormAction" />
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
            <SlitLamp :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <handlingSuggestion :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <FundusTestRoom :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <skiascopyRoom :id="id" :data="formData" @update="updateFormAction" />
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
            <Train :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <el-card class="font18 fontW600" shadow="never"> 咨询室 </el-card>
          </el-col>
          <el-col class="card-box">
            <WrittenConsent :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
          <el-col class="card-box">
            <el-card class="font18 fontW600" shadow="never"> 其他单据 </el-card>
          </el-col>
          <el-col class="card-box">
            <Documents :id="id" :data="formData" @update="updateFormAction" />
          </el-col>
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
            <div class="body" style="max-height: 300px; overflow-y: over">
              <div v-for="(item, index) in patientList" :key="item.id">
                <div class="flex-row just-between text-center">
                  <div class="patient">
                    {{ `${item.label}挂号排序${item.id}` }}
                  </div>
                  <div>
                    <el-button @click="choosePatient(item)" style="height: 28px" type="text">选择</el-button>
                  </div>
                </div>
                <el-divider v-if="index !== patientList.length - 1"></el-divider>
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
                  <el-cascader :props="waitProps" v-model="docData" @change="onDocChange"></el-cascader>
                </el-form-item>
              </el-form>
              <el-row class="card-btn">
                <el-button @click="(docData = []), (docForm = {})">重置</el-button>
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
import { listPatient, getPatient } from "@/api/system/patient";
import { addWait, listWait } from "@/api/system/wait";
import moment from "moment";
import useUserStore from "@/store/modules/user";

import { listUser, deptTreeSelect } from "@/api/system/user";
import {
  listForm,
  getForm,
  delForm,
  addForm,
  updateForm,
} from "@/api/system/form";

import {
  addFormFile,
  updateFormFile,
  delFormFile,
} from "@/api/system/formFile";
import { callWait } from "../../../api/system/wait";
import useSettingsStore from '@/store/modules/settings';

const settingsStore = useSettingsStore();

const userStore = useUserStore();

const id = ref("");
const formData = ref(null);
const docData = ref([]);
const docForm = ref({});
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

const patientList = ref([]);

const getWaitList = () => {
  listWait({
    pageNum: 1,
    pageSize: 999,
    patientStatus: '0',
    receptionDocId: userStore.userId
  }).then((res) => {
    console.log("patientList === ", res);
    patientList.value = res.rows.map((el) => ({
      ...el,
      label: el.patientName,
      value: el.patientId,
    }));
  });
}

getWaitList();

function typeOnChange(value) {
  if (!value !== value) {
    patientInfo.value.selectIop = "";
  }
  console.log("first", value, patientInfo.value.selectIop);
}

console.log("patientList", patientList.value.lenght);

const { proxy } = getCurrentInstance();

// const version = ref("3.8.5");
watch(() => settingsStore.dispatchState, () => {
  getWaitList();
})
function gotoAssign() {
  if (docData.value.length === 0) {
    proxy.$modal.msgError("未选择科室及医生！");
    return;
  }
  addWait({
    ...patientInfo.value,
    assignDocId: docData.value[3],
    room: docData.value[2],
  }).then((response) => {
    docForm.value.docId = docData.value[3];
    docForm.value.room = docData.value[2];
    proxy.$modal.msgSuccess("指派成功");
  });
}

const choosePatient = (item) => {
  id.value = item.id;
  console.log("item === ", item);
  patientInfo.value = item;
  docData.value = [];
  docForm.value = {};
  callWait(item);
  getForm(item.id).then((res) => {
    console.log("getForm", res);
  });
};
const updateFormAction = async (e, val) => {
  const res = await getForm(id.value);
  console.log("updateFormAction  =--- ", res, e, patientInfo.value);
  const { regNo, patientId, patientName, assignDocId: docId, patientPhone, room, patientIdCard } =
    patientInfo.value;
  if (e) {
    // 文件上传
    // addFormFile({
    // })
  }
  if (res?.formContent) {
    updateForm({
      id: id.value,
      regNo,
      patientId,
      patientName,
      patientPhone,
      patientIdCard,
      docId,
      room,
      formContent: res.formContent.push(e === false ? val : ""),
      fileUrl: res.fileUrl.push(e === true ? val : ""),
      type: "form",
      formTime: moment().format("YYYY-MM-DD HH:mm:ss"),
    }).then((res1) => {
      console.log("updateForm --- ", res1);
    });
  } else {
    addForm({
      id: id.value,
      regNo,
      patientId,
      patientName,
      patientPhone,
      patientIdCard,
      docId,
      room,
      formContent: e === false ? val : "",
      fileUrl: e === true ? val : "",
      type: "form",
      formTime: moment().format("YYYY-MM-DD HH:mm:ss"),
    }).then((res1) => {
      console.log("addForm --- ", res1);
    });
  }
};
const onDocChange = () => {
  console.log(docData.value, "----docData");
};

const loopFormat = (data) => {
  if (!data) {
    return [];
  }
  return data.map((el) => ({
    ...el,
    value: el.label,
    children: loopFormat(el.children),
  }));
};
/** 查询部门下拉树结构 */
function getDeptTree() {
  return new Promise((resolve) => {
    deptTreeSelect().then((response) => {
      resolve(loopFormat(response.data));
    });
  });
}
const waitProps = {
  lazy: true,
  lazyLoad(node, resolve) {
    const { level } = node;
    if (level === 0) {
      getDeptTree().then((res) => {
        resolve(res);
      });
    } else if (node.children.length === 0) {
      listUser({
        pageNum: 1,
        pageSize: 990,
        userName: undefined,
        phonenumber: undefined,
        status: undefined,
        deptId: node.data.id,
      }).then((res) => {
        resolve(
          res.rows.map((el) => ({
            ...el,
            value: el.userId,
            label: el.nickName,
            leaf: true,
          }))
        );
      });
    } else {
      resolve([]);
    }
  },
};

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

  font-family: "open sans",
  "Helvetica Neue",
  Helvetica,
  Arial,
  sans-serif;
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
  overflow-y: overlay;
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
