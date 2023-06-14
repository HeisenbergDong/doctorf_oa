<template>
  <div>
    <el-card class="update-log" shadow="never">
      <template v-slot:header>
        <div class="clearfix">
          <span class="font14">{{ "检影(待定1)" }}</span>
          <i icon="el-icon-circle-plus-outline"></i>
        </div>
      </template>
      <div class="body">
        <el-form
          :inline="true"
          label-position="right"
          label-width="80px"
          :model="patientInfo"
        >
          <el-row>
            <el-row>
              <el-form-item label="选项">
                <el-select
                  v-model="patientInfo.slecetTag"
                  multiple
                  collapse-tags
                  placeholder="请选择"
                >
                  <el-option
                    v-for="item in options"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  >
                  </el-option>
                </el-select>
              </el-form-item>
            </el-row>
            <el-row class="flex-row">
              <el-col :span="12">
                <el-form-item label="R">
                  <el-input
                    v-model="patientInfo.oneR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="X">
                  <el-input
                    v-model="patientInfo.oneRX"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="L">
                  <el-input
                    v-model="patientInfo.oneL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="X">
                  <el-input
                    v-model="patientInfo.oneLX"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="flex-row">
              <el-col :span="12">
                <el-form-item label="R">
                  <el-input
                    v-model="patientInfo.twoR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="X">
                  <el-input
                    v-model="patientInfo.twoRX"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="L">
                  <el-input
                    v-model="patientInfo.twoL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="X">
                  <el-input
                    v-model="patientInfo.twoLX"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-row>

          <el-row class="card-btn">
            <el-button @click="resetQuery">重置</el-button>
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
  
<script setup name="skiascopy">

const emit = defineEmits(['update']);
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  data:{
    type:Object,
    default:()=>({})
  }
});
const form = ref({
  id: "",
  type: "",
  patientId: props.id,
  patientName: "",
  patientPhone: "",
  patientIdCard: "",
  docId: "",
  docName: "",
  formTime: "",
  formContent: "",
});

const patientInfo = ref({
  slecetTag: "",
  oneR: "",
  oneRX: "",
  oneL: "",
  oneLX: "",
  twoR: "",
  twoRx: "",
  twoL: "",
  twoLx: "",
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    slecetTag: "",
    oneR: "",
    oneRX: "",
    oneL: "",
    oneLX: "",
    twoR: "",
    twoRx: "",
    twoL: "",
    twoLx: "",
  };
}
/** 提交按钮 */
function submitForm() {
  const isFile = false;
  let sq = {
    slecetTag: patientInfo.value.slecetTag,
    oneR: patientInfo.value.oneR,
    oneRX: patientInfo.value.oneRX,
    oneL: patientInfo.value.oneL,
    oneLX: patientInfo.value.oneLX,
    twoR: patientInfo.value.twoR,
    twoRx: patientInfo.value.twoRx,
    twoL: patientInfo.value.twoL,
    twoLx: patientInfo.value.twoLx,
  };
  const contant = JSON.stringify({skiascopy:sq});
  emit('update', isFile, contant);
  console.log("object :>> ", sq, contant, form.value);
}
const options = ref([
  {
    label: "裸眼",
    value: "裸眼",
  },
  {
    label: "原框",
    value: "原框",
  },
  {
    label: "小瞳",
    value: "小瞳",
  },
  {
    label: "散瞳",
    value: "散瞳",
  },
]);
</script>
  
  <style>
</style>