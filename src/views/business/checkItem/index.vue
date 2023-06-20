<!--
 * @Author: upeartaker 123@123.com
 * @Date: 2023-06-18 11:58:53
 * @LastEditors: upeartaker 123@123.com
 * @LastEditTime: 2023-06-20 19:30:31
 * @FilePath: \doctorf_oa\src\views\business\checkItem\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <section>
    <!-- 检查项目 -->
    <div class="app-container home flex-row">
      <el-col :span="18">
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="always"> 患者信息 </el-card>
        </el-col>
        <el-col v-if="id">
          <div class="card-box">
            <el-card shadow="always" class="">
              <el-row>
                <el-col :span="1" class="time-body">
                  <el-timeline>
                    <el-timeline-item
                      v-for="(activity, index) in timeLineArr"
                      :key="index"
                      size="large"
                      :timestamp="activity.timestamp"
                      :hide-timestamp="true"
                      placement="top"
                      class="time-item"
                    >
                    <el-tooltip
                      class="box-item"
                      effect="dark"
                      :content="activity.timestamp"
                      placement="right"
                    >
                      <div class="time-icon-text"></div>
                    </el-tooltip>
                    </el-timeline-item>
                  </el-timeline>
                </el-col>
                <el-col :span="23">
                  <el-tabs
                    v-model="activeTab"
                    class="tabs-body"
                    @edit="handleTabsEdit"
                  >
                    <el-tab-pane
                      v-for="item in tabArr"
                      :key="item.name"
                      :label="item.title"
                      :name="item.name"
                    >
                      <template #label>
                        <span class="custom-tabs-label">
                          <span>{{ item.title }}</span>
                        </span>
                      </template>
                      <!-- 视力检查 -->
                      <div class="tab-item" v-if="activeTab === 'visual_check'">
                        <VisualInspect :id="id" :data="formData" @update="updateFormAction"></VisualInspect>
                      </div>
                      <!-- 问诊单 -->
                      <!-- <div class="tab-item" v-if="activeTab === 'ask_form'">
                        <VisualInspect :id="id" :data="formData" @update="updateFormAction"></VisualInspect>
                      </div> -->
                      <!-- 主观前四项 -->
                      <div class="tab-item" v-if="activeTab === 'fourth'">
                        <SubjectiveFour :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 电脑验光 -->
                      <div class="tab-item" v-if="activeTab === 'optometry'">
                        <ComputerRefraction :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 角膜地形图 -->
                      <div class="tab-item" v-if="activeTab === 'corneal_map'">
                        <CorneaTopography :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 生物测量仪 -->
                      <div class="tab-item" v-if="activeTab === 'organism_test'">
                        <BiometricInstrument :id="id" />
                      </div>
                      <!-- 内皮细胞检查 -->
                      <div class="tab-item" v-if="activeTab === 'cell_check'">
                        <Endothelial :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- MRT检查 -->
                      <div class="tab-item" v-if="activeTab === 'mrt_check'">
                        <MRT :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 干眼检查 -->
                      <div class="tab-item" v-if="activeTab === 'dry_eye'">
                        <DryEyeTest :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 眼底检查 -->
                      <div class="tab-item" v-if="activeTab === 'ground_eye'">
                        <FundusTest :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 眼压 -->
                      <div class="tab-item" v-if="activeTab === 'pressure_eye'">
                        <IOP :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 三项视功能检查 -->
                      <div class="tab-item" v-if="activeTab === 'three_check'"></div>
                      <!-- 角膜接触镜片上电脑验光 -->
                      <div class="tab-item" v-if="activeTab === 'touch_corneal'">
                        <UpComputerRefraction :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                        <!-- 角膜接触镜片上角膜地形图 -->
                        <div class="tab-item" v-if="activeTab === 'corneal_graph'">
                          <UpCorneaTopography :id="id" :data="formData" @update="updateFormAction" />
                        </div>
                      <!-- 检影 -->
                      <div class="tab-item" v-if="activeTab === 'picture_check'">
                        <Skiascopy :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 视功能检查 -->
                      <div class="tab-item" v-if="activeTab === 'vision_check'">
                        <SightTestRoom :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 主观验光 -->
                      <div class="tab-item" v-if="activeTab === 'optometry_subjectivity'">
                        <SubjectiveRefraction :id="id" :data="formData" @update="updateFormAction"></SubjectiveRefraction>
                      </div>
                      <!-- 试戴 -->
                      <div class="tab-item" v-if="activeTab === 'try_wear'">
                        <TryOn :id="id" />
                      </div>
                      <!-- 角膜接触镜片上检影 -->
                      <div class="tab-item" v-if="activeTab === 'photoscopy_corneal'">
                        <UpSubjectiveRefraction :id="id" />
                      </div>
                      <!-- 取镜 -->
                      <div class="tab-item" v-if="activeTab === 'take_mirror'">
                        <Glasses :id="id" />
                      </div>
                      <!-- 裂隙灯检查 -->
                      <div class="tab-item" v-if="activeTab === 'slit_check'">
                        <SlitLamp :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 处理意见 -->
                      <div class="tab-item" v-if="activeTab === 'handling_opinions'">
                        <handlingSuggestion :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 取片 -->
                      <div class="tab-item" v-if="activeTab === 'take_picture'">
                        <SliceExtraction :id="id" />
                      </div>
                      <!-- 视功能训练 -->
                      <div class="tab-item" v-if="activeTab === 'vision_train'">
                        <Train :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 知情同意书签字 -->
                      <div class="tab-item" v-if="activeTab === 'Informed_bookmark'">
                        <WrittenConsent :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                      <!-- 其他单据 -->
                      <div class="tab-item" v-if="activeTab === 'other'">
                        <Documents :id="id" :data="formData" @update="updateFormAction" />
                      </div>
                    </el-tab-pane>
                  </el-tabs>
                </el-col>
              </el-row>
            </el-card>
          </div>
        </el-col>
      </el-col>

      <!-- right -->
      <el-col :span="6">
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="always"> 挂号列表 </el-card>
        </el-col>
        <el-col class="card-box">
          <el-card class="update-log" shadow="always">
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
                    <el-button v-if="index === 0" @click="choosePatient(item)" style="height: 28px" type="text">叫号</el-button>
                  </div>
                </div>
                <el-divider v-if="index !== patientList.length - 1"></el-divider>
              </div>
            </div>
          </el-card>
        </el-col>
        <el-col class="card-box">
          <el-card class="font18 fontW600" shadow="always"> 指派 </el-card>
        </el-col>
        <el-col class="card-box">
          <el-card class="update-log" shadow="always">
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
                <el-button type="primary" @click="gotoAssign">完成</el-button>
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
import useAppStore from '@/store/modules/app';
import VisualInspect from './components/tab-components/visualInspect.vue';
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
import { listVisit } from "@/api/system/visit";
import { getSettingListApi} from "@/api/system/settingApi";
import { getDicts } from '@/api/system/dict/data'
const { proxy } = getCurrentInstance();
const settingsStore = useSettingsStore();
const userStore = useUserStore();
const appStore = useAppStore()

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
const activeTab = ref(""); // 诊室tab
const tabArr = ref([]); // 时间轴
const timeLineArr = ref([]);
const depInfo =  ref({});
const checkList =  ref([]);
const checkMap = ref({}); // 检查项映射关系

function initSelect() {
  getDicts('f_form').then(res => {
		if (res && res.code === 200) {
			res.data && res.data.forEach(item => {
				checkMap.value[item.dictValue] = item.dictLabel
			})
      initSettingList()
		}
	})
}
initSelect();

// 初始化时间轴
const initVisitList = (data) => {
  listVisit({patientId: data.id}).then(res => {
    timeLineArr.value = res.rows.map((el) => ({
      ...el,
      timestamp: el.visitTime
    }));
  })
}

// 初始化检查项
const initSettingList = (data) => {
  checkList.value = []
  tabArr.value = []
  getSettingListApi({room: userStore.deptInfo.deptName}).then(res => {
    if (res && res.code === 200) {
      activeTab.value = res.rows[0].formType
      res.rows.forEach(element => {
        checkList.value.push(element.room)
        tabArr.value.push({title: element.formType, name: element.formType})
      });
    }
  })
}

// 关闭菜单
function toggleSideBar() {
  appStore.toggleSideBar()
}

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
    if (patientList.value.length) {
      initPatientData(patientList.value[0]);
      initVisitList(patientList.value[0]);
    }
  });
}
toggleSideBar();
getWaitList();

function typeOnChange(value) {
  if (!value !== value) {
    patientInfo.value.selectIop = "";
  }
  console.log("first", value, patientInfo.value.selectIop);
}

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

// 默认初始化第一个患者
const initPatientData = (item) => {
  id.value = item.id;
  console.log("item === ", item);
  patientInfo.value = item;
  docData.value = [];
  docForm.value = {};
  callWait(item);
  getForm(item.id).then((res) => {
    console.log("getForm", res);
  });
}

const choosePatient = (item) => {
  id.value = item.id;
  console.log("item === ", item);
  patientInfo.value = item;
  docData.value = [];
  docForm.value = {};
  callWait(item).then((resp => {
    getWaitList();
  }));
  // getForm(item.id).then((res) => {
  //   console.log("getForm", res);
  // });
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
.custom-tabs-label {
  font-size: 15px;
  font-weight: 500;
}
.tab-item {
  width: 100%;
  height: 100%;
  .item-title {
    height: 20px;
    font-size: 14px;
    font-weight: 600;
  }
  .item-body {
    padding-top: 10px;
    .item-row {
      display: flex;
      .table-title-body {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-grow: 1;
        min-width: 150px;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #E5E5E5;
        .item-table-text {
          font-size: 14px;
          font-weight: 600px;
        }
      }
      .item-table {
        flex-grow: 1;
        padding: 10px;
        box-sizing: border-box;
        border: 1px solid #E5E5E5;
        .table-row {
          display: flex;
          padding: 2px;
          align-items: center;
          .row-label {
            width: 60px;
          }
        }
      }
      .item-table-title {
        font-size: 14px;
        font-weight: 600px !important;
      }
    }
    
  }
}
.time-body {
  padding-top: 15px;
}
.time-item {
  position: relative;
  min-height: 80px;
}
.time-icon-text {
  position: absolute;
  width: 15px;
  height: 15px;
  right: 21px;
  border-radius: 8px;
  top: 3px;
}
</style>
