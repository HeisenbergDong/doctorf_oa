<!-- 主观前四项 -->
<template>
  <div>
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
              <el-select v-model="patientInfo.convergenceOptometry" placeholder="请选择">
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
                v-model="patientInfo.positionOneOptometry"
                placeholder="请输入"
                class="mr24 w180i"
              ></el-input>
              <div style="position: absolute; top: -30; right: 180px">
                /33cm;
              </div>
              <el-input
                v-model="patientInfo.positionTwoOptometry"
                placeholder="请输入"
                class="ml24 w180i"
              ></el-input>
              <div style="position: absolute; top: 0; right: -38px">/6cm;</div>
            </el-form-item>
            <el-form-item label="主导眼">
              <el-select v-model="patientInfo.dominantOptometry" placeholder="请选择">
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
          <el-button @click="resetQuery">重置</el-button>
          <el-button type="primary" @click="submitForm">提交</el-button>
        </el-row>
      </div>
    </el-card>
  </div>
</template>
  
<script setup name="subjectiveFourRoom">

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
watch(()=>props.data,(val)=>{
  patientInfo.value = val;
})
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
  convergenceOptometry: "",
  positionOneOptometry: "",
  positionTwoOptometry: "",
  dominantOptometry: "",
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    convergenceOptometry: "",
    positionOneOptometry: "",
    positionTwoOptometry: "",
    dominantOptometry: "",
  };
}
/** 提交按钮 */
function submitForm() {
  const isFile = false;
  let sq = {
    convergenceOptometry: patientInfo.value.convergenceOptometry,
    positionOneOptometry: patientInfo.value.positionOneOptometry,
    positionTwoOptometry: patientInfo.value.positionTwoOptometry,
    dominantOptometry: patientInfo.value.dominantOptometry,
  };
  const contant = JSON.stringify({subjectiveFourRoom:sq});
  emit('update', isFile, contant);
  console.log("object :>> ", sq, contant, form.value);
  
}
</script>
  
<style>
</style>