<!--
 * @Author: upeartaker 123@123.com
 * @Date: 2023-06-19 09:03:37
 * @LastEditors: upeartaker 123@123.com
 * @LastEditTime: 2023-06-20 08:46:59
 * @FilePath: \doctorf_oa\src\views\business\outpatientQueue\ClinicRoom.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 特殊检查室门诊队列 -->
<template>
	<div class="app-container">
    <el-row>
			<el-col class="card-box">
				<el-card class="" shadow="always">
          <el-row>
            <span>当前叫号：</span>
            <span v-if="typeList.length">患者姓名：{{ typeList[0].patientName }}&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;患者电话：{{ typeList[0].patientPhone }}</span>
          </el-row>
				</el-card>
			</el-col>
		</el-row>
		<el-row>
			<el-col class="card-box">
				<el-card class="" shadow="always">
					<el-table :data="typeList" style="width: 100%" v-loading="loading">
						<el-table-column label="排队id" align="center" prop="id" />
						<el-table-column label="患者姓名" width="120" fixed="left" align="center" prop="patientName" />
						<el-table-column label="患者电话" width="120" align="center" prop="patientPhone"
							:show-overflow-tooltip="true" />
						<el-table-column label="患者排队状态" width="120" align="center" prop="patientStatusTxt"
							:show-overflow-tooltip="true">
						</el-table-column>
						<el-table-column label="诊室" align="center" width="120" prop="room">
						</el-table-column>
						<el-table-column label="调整队列的医生姓名" width="180" align="center" prop="adjustDocName" />
						<el-table-column label="接待医生姓名" width="120" align="center" prop="receptionDocName" />
						<el-table-column label="指派医生姓名" width="120" align="center" prop="assignDocName" />
						<el-table-column label="指派医生遗嘱" width="220" align="center" prop="assignContent" />
						<el-table-column label="备注" width="220" align="center" prop="remark" :show-overflow-tooltip="true" />
					</el-table>
				</el-card>
			</el-col>
		</el-row>
	</div>
</template>
  
<script setup name="SpecialExaminationRoom">
  import useDictStore from "@/store/modules/dict";
  import { consultingWaitListApi } from "@/api/system/wait";
  import { onMounted } from "vue";
  import Speech from "speak-tts";
  import moment from 'moment';
  
  const { proxy } = getCurrentInstance();
  
  const typeList = ref([]);
  const loading = ref(true);
  const total = ref(0);
  
  const data = reactive({
    form: {},
    queryParams: {
      pageNum: 1,
      pageSize: 999,
      patientId: null,
      patientStatus: null,
      waitTime: moment(new Date()).format("YYYY-MM-DD"),
      room: '特殊检查室',
      parentId: null,
    }
  });
  
  // 语音播报
  const speech = ref(null);
  function speechInit() {
    speech.value = new Speech();
    speech.value.setLanguage("zh-CN");
    speech.value.init().then(() => {
      console.log("语音播报初始化完成...");
    });
  }
  function handleAssign(row) {
    form.value.id = row.id;
    waitOpen.value = true;
    waitForm.value = row;
    waitForm.value.waitIdList = [];
    // addWait(form.value).then((response) => {
    //   open.value = false;
    //   getList();
    // });
    // speech.value
    //   .speak({ text: `请${row.id}号患者到${row.room}就诊` })
    //   .then(() => {
    //     console.log("读取成功");
    //   });
  }
  onMounted(() => {
    speechInit();
  });
  
  const { queryParams, form, waitForm } = toRefs(data);
  
  /** 查询列表 */
  function getList() {
    loading.value = true;
    const temp = {
      0:'排队中',
      1:'进行中',
      2:'已完成',
    }
    consultingWaitListApi(proxy.addDateRange(queryParams.value)).then((response) => {
      typeList.value = response.data.map(el=>({
        ...el,
        patientStatusTxt:temp[el.patientStatus]
        // 0-排队中 1-进行中 2-已完成
      }));
      total.value = response.total;
      loading.value = false;
      console.log("consultingWaitListApi :>> ", typeList.value);
    });
  }
  getList();
</script>
<style lang="scss">
.form_card .el-card__body {
	padding: 15px 20px 0px 20px !important;
}
</style>
  