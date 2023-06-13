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
                    <el-checkbox :label="vitreumTextL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="vitreumTextL"
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
                    <el-checkbox :label="vitreumTextR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="vitreumTextR"
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
                    <el-checkbox :label="retinaTextL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="retinaTextL"
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
                    <el-checkbox :label="retinaTextR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="retinaTextR"
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
            <el-button @click="resetQuery">重置</el-button>
            <el-button type="primary" @click="submitForm">提交</el-button>
          </el-row>
        </el-form>
      </div>
    </el-card>
  </div>
</template>
  
<script setup name="fundusTest">

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
watch(()=>props.data,(val)=>{
  patientInfo.value = val;
})
const vitreumTextL = ref("");
const vitreumTextR = ref("");
const retinaTextL = ref("");
const retinaTextR = ref("");
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
  const contant = JSON.stringify({fundusTest:sq});
  emit('update',contant);
  console.log("object :>> ", sq, contant, form.value);
}
</script>
  
  <style>
</style>