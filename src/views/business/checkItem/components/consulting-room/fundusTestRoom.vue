<template>
  <div>
    <el-card class="update-log" shadow="never">
      <template v-slot:header>
        <div class="clearfix">
          <span class="font14">{{ "眼底检查" }}</span>
        </div>
      </template>
      <div class="body">
        <el-form
          label-position="right"
          label-width="110px"
          :model="patientInfo"
        >
          <el-row>
            <el-row class="flex-row w100i">
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "玻璃体L：" }}
                </div>
                <el-form-item label="玻璃体：" class="ml42">
                  <el-checkbox-group v-model="patientInfo.vitreumL">
                    <el-checkbox :label="'正常'">正常</el-checkbox>
                    <el-checkbox :label="textarea">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="textarea"
                        :autosize="{ minRows: 1, maxRows: 2 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "玻璃体R：" }}
                </div>
                <el-form-item label="玻璃体：" class="ml42">
                  <el-checkbox-group v-model="patientInfo.vitreumR">
                    <el-checkbox :label="'正常'">正常</el-checkbox>
                    <el-checkbox :label="textarea">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="textarea"
                        :autosize="{ minRows: 1, maxRows: 2 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row class="flex-row">
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "视网膜L：" }}
                </div>
                <el-form-item label="视网膜：" class="ml42">
                  <el-checkbox-group v-model="patientInfo.retinaL">
                    <el-checkbox :label="'正常'">正常</el-checkbox>
                    <el-checkbox :label="'豹纹状改变'">豹纹状改变</el-checkbox>
                    <el-checkbox :label="'脉络膜环'">脉络膜环</el-checkbox>
                    <el-checkbox :label="'视盘边界'">视盘边界</el-checkbox>
                    <el-checkbox :label="'色'">色</el-checkbox>
                    <el-checkbox :label="'C/D'">C/D</el-checkbox>
                    <el-checkbox :label="'中心凹反射'">中心凹反射</el-checkbox>
                    <el-checkbox :label="'出血'">出血</el-checkbox>
                    <el-checkbox :label="'渗出'">渗出</el-checkbox>
                    <el-checkbox :label="'A/V'">A/V</el-checkbox>
                    <el-checkbox :label="textarea">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="textarea"
                        :autosize="{ minRows: 1, maxRows: 2 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <div class="ml42 mb16 font14 fontW600">
                  {{ "视网膜R：" }}
                </div>
                <el-form-item label="视网膜：" class="ml42">
                  <el-checkbox-group v-model="patientInfo.retinaR">
                    <el-checkbox :label="'正常'">正常</el-checkbox>
                    <el-checkbox :label="'豹纹状改变'">豹纹状改变</el-checkbox>
                    <el-checkbox :label="'脉络膜环'">脉络膜环</el-checkbox>
                    <el-checkbox :label="'视盘边界'">视盘边界</el-checkbox>
                    <el-checkbox :label="'色'">色</el-checkbox>
                    <el-checkbox :label="'C/D'">C/D</el-checkbox>
                    <el-checkbox :label="'中心凹反射'">中心凹反射</el-checkbox>
                    <el-checkbox :label="'出血'">出血</el-checkbox>
                    <el-checkbox :label="'渗出'">渗出</el-checkbox>
                    <el-checkbox :label="'A/V'">A/V</el-checkbox>
                    <el-checkbox :label="textarea">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="textarea"
                        :autosize="{ minRows: 1, maxRows: 2 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-col>
            </el-row>
          </el-row>
          <el-row class="card-btn">
            <el-button>重置</el-button>
            <el-button type="primary">提交</el-button>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
  
<script setup name="fundusTestRoom">
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
  vitreumL: [],
  vitreumR: [],
  retinaL: [],
  retinaR: [],
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
        vitreumL: dataJson.value.vitreumL.split(),
        vitreumR: dataJson.value.vitreumR.split(),
        retinaL: dataJson.value.retinaL.split(),
        retinaR: dataJson.value.retinaR.split(),
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
    vitreumL: [],
    vitreumR: [],
    retinaL: [],
    retinaR: [],
  };
}
/** 提交按钮 */
function submitForm() {
  let sq = {
    vitreumL: patientInfo.value.vitreumL.toString(),
    vitreumR: patientInfo.value.vitreumR.toString(),
    retinaL: patientInfo.value.retinaL.toString(),
    retinaR: patientInfo.value.retinaR.toString(),
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