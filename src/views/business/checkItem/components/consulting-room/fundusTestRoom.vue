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
                  <el-checkbox-group v-model="patientInfo.vitreumRoomL">
                    <el-checkbox :label="'正常'">正常</el-checkbox>
                    <el-checkbox :label="vitreumTextRoomL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="vitreumTextRoomL"
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
                  <el-checkbox-group v-model="patientInfo.vitreumRoomR">
                    <el-checkbox :label="'正常'">正常</el-checkbox>
                    <el-checkbox :label="vitreumTextRoomR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="vitreumTextRoomR"
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
                  <el-checkbox-group v-model="patientInfo.retinaRoomL">
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
                    <el-checkbox :label="retinaTextRoomL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="retinaTextRoomL"
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
                  <el-checkbox-group v-model="patientInfo.retinaRoomR">
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
                    <el-checkbox :label="retinaTextRoomR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="retinaTextRoomR"
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
  
<script setup name="fundusTestRoom">
const emit = defineEmits(["update"]);
const props = defineProps({
  id: {
    type: String,
    default: "",
  },
  data: {
    type: Object,
    default: () => ({}),
  },
});
watch(
  () => props.data,
  (val) => {
    patientInfo.value = val;
  }
);
const vitreumTextRoomL = ref("");
const vitreumTextRoomR = ref("");
const retinaTextRoomL = ref("");
const retinaTextRoomR = ref("");
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
  vitreumRoomL: [],
  vitreumRoomR: [],
  retinaRoomL: [],
  retinaRoomR: [],
});
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    vitreumRoomL: [],
    vitreumRoomR: [],
    retinaRoomL: [],
    retinaRoomR: [],
  };
}
/** 提交按钮 */
function submitForm() {
  let sq = {
    vitreumRoomL: patientInfo.value.vitreumRoomL.toString(),
    vitreumRoomR: patientInfo.value.vitreumRoomR.toString(),
    retinaRoomL: patientInfo.value.retinaRoomL.toString(),
    retinaRoomR: patientInfo.value.retinaRoomR.toString(),
  };
  const isFile = false;
  const contant = JSON.stringify({ fundusTestRoom: sq });
  emit("update", isFile, contant);
  console.log("object :>> ", sq, contant, form.value);
}
</script>
  
  <style>
</style>