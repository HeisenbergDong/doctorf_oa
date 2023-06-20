<!-- 视力检查 -->
<template>
  <div class="visual-inspect">
    <div class="item-body">
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">眼别</span>
        </div>
        <div class="item-table">
          <div class="row-label">R</div>
        </div>
        <div class="item-table">
          <div class="row-label">L</div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">远视力</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">裸眼：</div>
            <el-input v-model="patientInfo.distantNakedL" placeholder="" clearable />
          </div>
          <div class="table-row">
            <div class="row-label">框架：</div>
            <el-input v-model="patientInfo.distantFrame" placeholder="" clearable />
          </div>
          <div class="table-row">
            <div class="row-label">片上：</div>
            <el-input v-model="patientInfo.distantOnL" placeholder="" clearable />
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">裸眼：</div>
            <el-input v-model="patientInfo.distantNakedR" placeholder="" clearable />
          </div>
          <div class="table-row">
            <div class="row-label">框架：</div>
            <el-input v-model="patientInfo.distantFrameR" placeholder="" clearable />
          </div>
          <div class="table-row">
            <div class="row-label">片上：</div>
            <el-input v-model="patientInfo.distantOnR" placeholder="" clearable />
          </div>
        </div>
      </div>
      <div class="item-row item-mr">
        <div class="table-title-body">
          <span class="item-table-text">近视力</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">裸眼：</div>
            <el-input v-model="patientInfo.nearNakedL" placeholder="" clearable />
          </div>
          <div class="table-row">
            <div class="row-label">框架：</div>
            <el-input v-model="patientInfo.nearFrameL" placeholder="" clearable />
          </div>
          <div class="table-row">
            <div class="row-label">片上：</div>
            <el-input v-model="patientInfo.nearOnL" placeholder="" clearable />
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">裸眼：</div>
            <el-input v-model="patientInfo.nearNakedR" placeholder="" clearable />
          </div>
          <div class="table-row">
            <div class="row-label">框架：</div>
            <el-input v-model="patientInfo.nearFrameR" placeholder="" clearable />
          </div>
          <div class="table-row">
            <div class="row-label">片上：</div>
            <el-input v-model="patientInfo.nearOnR" placeholder="" clearable />
          </div>
        </div>
      </div>
      <div class="check-body">
        <div class="check-line"></div>
        <el-row>
          <el-col :span="24">
            <el-col>
              <el-form-item label="镜片：划痕：">
                <el-checkbox-group v-model="patientInfo.lensScratch">
                  <el-checkbox label="-">( - )</el-checkbox>
                  <el-checkbox label="+">( + )</el-checkbox>
                  <el-checkbox label="++">( ++ )</el-checkbox>
                  <el-checkbox label="+++">( +++ )</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <el-col>
              <el-form-item label="镜架：">
                <el-checkbox-group v-model="patientInfo.eyeglassFrame">
                  <el-checkbox label="正常">正常</el-checkbox>
                  <el-checkbox label="脱色">脱色</el-checkbox>
                  <el-checkbox label="变形">变形</el-checkbox>
                  <el-checkbox label="裂痕">裂痕</el-checkbox>
                  <el-checkbox label="其他">其他</el-checkbox>
                </el-checkbox-group>
              </el-form-item>
            </el-col>
          </el-col>
        </el-row>
      </div>
      <el-row class="card-btn">
        <el-button @click="resetQuery">重置</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-row>
    </div>
  </div>
</template>
  
<script setup name="visualInspect">
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
    distantNakedL: "",
    distantFrameL: "",
    distantOnL: "",
    distantNakedR: "",
    distantFrameR: "",
    distantOnR: "",
    nearNakedL: "",
    nearFrameL: "",
    nearOnL: "",
    nearNakedR: "",
    nearFrameR: "",
    nearOnR: "",
    lensScratch: [],
    eyeglassFrame: [],
  });
  /** 重置按钮操作 */
  function resetQuery() {
    patientInfo.value = {
      distantNakedL: "",
      distantFrameL: "",
      distantOnL: "",
      distantNakedR: "",
      distantFrameR: "",
      distantOnR: "",
      nearNakedL: "",
      nearFrameL: "",
      nearOnL: "",
      nearNakedR: "",
      nearFrameR: "",
      nearOnR: "",
      lensScratch: [],
      eyeglassFrame: [],
    };
  }
  /** 提交按钮 */
  function submitForm() {
    const isFile = false;
    let sq = {
      distantNakedL: patientInfo.value.distantNakedL,
      distantFrameL: patientInfo.value.distantFrameL,
      distantOnL: patientInfo.value.distantOnL,
      distantNakedR: patientInfo.value.distantNakedR,
      distantFrameR: patientInfo.value.distantFrameR,
      distantOnR: patientInfo.value.distantOnR,
      nearNakedL: patientInfo.value.nearNakedL,
      nearFrameL: patientInfo.value.nearFrameL,
      nearOnL: patientInfo.value.nearOnL,
      nearNakedR: patientInfo.value.nearNakedR,
      nearFrameR: patientInfo.value.nearFrameR,
      nearOnR: patientInfo.value.nearOnR,
      lensScratch: patientInfo.value.lensScratch.toString(),
      eyeglassFrame: patientInfo.value.eyeglassFrame.toString(),
    };
    const contant = JSON.stringify({ sightTest: sq });
    emit("update", isFile, contant);
    console.log("object :>> ", contant);
  }
</script>
  
<style scoped>
.visual-inspect {
}
:deep(.el-form-item--default) {
  margin: 0px !important;
}
:deep(.el-form-item) {
  margin: 0px !important;
}
.item-title {
  height: 20px;
  font-size: 14px;
  font-weight: 600;
}
.item-body {
  padding-top: 10px;
}
.item-row {
  display: flex;
}
.table-title-body {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20%;
  min-width: 150px;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #E5E5E5;
  
}
.item-table-text {
    font-size: 14px;
    font-weight: 600px !important;
  }
.item-table {
  flex-grow: 1;
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid #E5E5E5;
}
.table-row {
  display: flex;
  padding: 2px;
  align-items: center;
}
.row-label {
  width: 60px;
}
.item-table-title {
  font-size: 14px;
  font-weight: 600px !important;
}
  
.time-body {
  padding-top: 15px;
}
.time-item {
  position: relative;
  min-height: 50px;
}
.time-icon-text {
  position: absolute;
  width: 15px;
  height: 15px;
  right: 21px;
  border-radius: 8px;
  top: 3px;
}
.item-mr {
  margin-bottom: 15px;
}
.check-body {
  padding-left: 10px;
  position: relative;
}
.check-line {
  position: absolute;
  height: 50px;
  border-left: 2px solid;
  top: 7px;
  left: 2px;
}
:deep(.el-form-item__label) {
  width: 100px;
  justify-content: flex-start;
}
</style>