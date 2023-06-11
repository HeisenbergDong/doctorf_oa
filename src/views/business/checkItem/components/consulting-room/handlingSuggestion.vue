<template>
  <div>
    <el-card class="update-log" shadow="never">
      <template v-slot:header>
        <div class="clearfix">
          <span class="font14">{{ "处理意见" }}</span>
        </div>
      </template>
      <div class="body">
        <el-form
          label-position="right"
          label-width="110px"
          :model="patientInfo"
        >
          <el-row>
            <el-form-item label="人工泪液：" class="ml42">
              <el-checkbox-group v-model="patientInfo.artificialTears">
                <el-checkbox :label="'3%丽爱思'">3%丽爱思</el-checkbox>
                <el-checkbox :label="'0.3%爱丽'">0.3%爱丽</el-checkbox>
                <el-checkbox :label="'0.3%爱丽(MINI)'"
                  >0.3%爱丽(MINI)</el-checkbox
                >
                <el-checkbox :label="'0.1%海露 滴眼液'"
                  >0.1%海露 滴眼液</el-checkbox
                >
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="使用(次/日)：" class="ml42">
              <el-input
                v-model="patientInfo.num"
                placeholder="请输入"
                class="mr24 w180i"
              ></el-input>
              <div>滴双眼</div>
            </el-form-item>
          </el-row>
          <el-row>
            <el-form-item label="处理意见：" class="ml42">
              <el-checkbox-group v-model="patientInfo.opinion">
                <el-checkbox :label="'注意用眼卫生，多做户外活动'"
                  >注意用眼卫生，多做户外活动</el-checkbox
                >
                <el-checkbox :label="'辐辏训练'">辐辏训练</el-checkbox>
                <el-checkbox :label="'调节训练'">调节训练</el-checkbox>
                <el-checkbox :label="'注意镜片位置'">注意镜片位置</el-checkbox>
                <el-checkbox :label="'注意镜片清洁度'"
                  >注意镜片清洁度</el-checkbox
                >
              </el-checkbox-group>
            </el-form-item>
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
  
<script setup name="handlingSuggestion">
import {
  listForm,
  getForm,
  delForm,
  addForm,
  updateForm,
} from "@/api/system/form";

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
  artificialTears: [],
  num: "",
  opinion: [],
});
const isInfo = ref();
/** 获取表单详情 */
function getData() {
  resetQuery();
  const Id = props.id;
  getForm(Id).then((response) => {
    isInfo.value = response.data || null;
    if (isInfo.value) {
      const dataJson = JSON.parse(isInfo.value);
      patientInfo.value = {
        ...dataJson.value,
        artificialTears: dataJson.value.artificialTears.split(),
        opinion: dataJson.value.opinion.split(),
      };
    }
    // form.value = response.data;
    // open.value = true;
    console.log("getForm", response, isInfo.value);
  });
}
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    artificialTears: [],
    num: "",
    opinion: [],
  };
}
/** 提交按钮 */
function submitForm() {
  let sq = {
    artificialTears: patientInfo.value.artificialTears.toString(),
    num: patientInfo.value.num,
    opinion: patientInfo.value.opinion.toString(),
  };
  const contant = JSON.stringify(sq);
  //   const obj = JSON.parse(contant);
  console.log("object :>> ", sq, contant, form.value);
  if (isInfo.value === null) {
    form.value.formContent = contant;
    updateForm(form.value).then((response) => {
      proxy.$modal.msgSuccess("修改成功");
      open.value = false;
      getList();
    });
  } else {
    form.value.formContent = contant;
    addForm(form.value).then((response) => {
      proxy.$modal.msgSuccess("新增成功");
      open.value = false;
      getList();
    });
  }
}
getData();
</script>
  
  <style>
</style>