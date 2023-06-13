<template>
  <div>
    <el-card class="update-log" shadow="never">
      <template v-slot:header>
        <div class="clearfix">
          <span class="font14">{{ "检影(待定2)" }}</span>
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
                  v-model="patientInfo.slecetTagRoom"
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
                    v-model="patientInfo.oneRoomR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="X">
                  <el-input
                    v-model="patientInfo.oneRoomRX"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="L">
                  <el-input
                    v-model="patientInfo.oneRoomL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="X">
                  <el-input
                    v-model="patientInfo.oneRoomLX"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="flex-row">
              <el-col :span="12">
                <el-form-item label="R">
                  <el-input
                    v-model="patientInfo.twoRoomR"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="X">
                  <el-input
                    v-model="patientInfo.twoRoomRX"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="L">
                  <el-input
                    v-model="patientInfo.twoRoomL"
                    placeholder="请输入"
                  ></el-input>
                </el-form-item>
                <el-form-item label="X">
                  <el-input
                    v-model="patientInfo.twoRoomLX"
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
  
<script setup name="skiascopyRoom">

const emit = defineEmits(['update']);
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
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
  slecetTagRoom: "",
  oneRoomR: "",
  oneRoomRX: "",
  oneRoomL: "",
  oneRoomLX: "",
  twoRoomR: "",
  twoRoomRx: "",
  twoRoomL: "",
  twoRoomLx: "",
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    slecetTagRoom: "",
    oneRoomR: "",
    oneRoomRX: "",
    oneRoomL: "",
    oneRoomLX: "",
    twoRoomR: "",
    twoRoomRx: "",
    twoRoomL: "",
    twoRoomLx: "",
  };
}
/** 提交按钮 */
function submitForm() {
  let sq = {
    slecetTagRoom: patientInfo.value.slecetTagRoom,
    oneRoomR: patientInfo.value.oneRoomR,
    oneRoomRX: patientInfo.value.oneRoomRX,
    oneRoomL: patientInfo.value.oneRoomL,
    oneRoomLX: patientInfo.value.oneRoomLX,
    twoRoomR: patientInfo.value.twoRoomR,
    twoRoomRx: patientInfo.value.twoRoomRx,
    twoRoomL: patientInfo.value.twoRoomL,
    twoRoomLx: patientInfo.value.twoRoomLx,
  };
  const contant = JSON.stringify({skiascopyRoom:sq});
  emit('update',contant);
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