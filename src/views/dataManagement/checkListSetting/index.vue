<!--
 * @Author: upeartaker 123@123.com
 * @Date: 2023-06-19 14:40:15
 * @LastEditors: upeartaker 123@123.com
 * @LastEditTime: 2023-06-20 19:26:02
 * @FilePath: \doctorf_oa\src\views\dataManagement\checkListSetting\index.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<!-- 诊室检查项设置 -->
<template>
	<div class="app-container">
		<el-card>
			<span>诊室检查项设置</span>
		</el-card>
		<el-card class="set-body">
			<el-table
				:data="tableList"
				style="width: 100%"
				v-loading="loading"
				:default-expand-all="true"
			>
				<el-table-column type="expand">
					<template #default="props">
						<el-table :data="props.row.checkArr" :show-header="false">
							<el-table-column align="center" label="检查项名称">
								<template #default="scope">
									<span style="margin-left: 10px">{{ scope.row.formType }}</span>
								</template>
							</el-table-column>
							<el-table-column
								label="操作"
								align="center"
								fixed="right"
								class-name="small-padding fixed-width"
							>
								<template #default="scope">
									<el-button
										link
										type="primary"
										icon="Edit"
										@click="handleUpdate(props.row, scope.row)"
									>修改</el-button>
									<el-button
										link
										type="primary"
										icon="Delete"
										@click="handleDel(scope.row)"
									>删除</el-button>
								</template>
							</el-table-column>
						</el-table>
					</template>
				</el-table-column>
				<el-table-column
					label="诊室名称"
					align="left"
					prop="dictLabel"
				/>
				<el-table-column
					label="操作"
					align="center"
					fixed="right"
					class-name="small-padding fixed-width"
				>
					<template #default="scope">
						<el-button
							link
							type="primary"
							icon="CirclePlus"
							@click="handleSetting(scope.row)"
							>新增检查项</el-button>
					</template>
				</el-table-column>
			</el-table>
		</el-card>
		<el-dialog
			v-model="dialogVisible"
			title="设置检查项"
			width="60%"
		>
			<div class="pop-body">
				<el-radio-group v-model="checkStr" class="checkbox-body">
					<el-radio v-for="(item, index) in checkBoxList" :label="item.dictLabel" :key="item.dictLabel">{{ item.dictLabel }}</el-radio>
				</el-radio-group>
			</div>
			<template #footer>
				<span class="dialog-footer">
					<el-button @click="dialogVisible = false">取 消</el-button>
					<el-button type="primary" @click="handleConfirm">
						确 认
					</el-button>
				</span>
			</template>
		</el-dialog>
	</div>
</template>
  
<script setup name="CheckListSetting">
import useDictStore from "@/store/modules/dict";
import { getDicts } from '@/api/system/dict/data'
import { onMounted, ref } from 'vue';
import { getSettingListApi, addSettingApi, updateSettingApi, delSettingApi} from "@/api/system/settingApi";

const { proxy } = getCurrentInstance();
const loading = ref(false);
const tableList = ref([]); // 诊室集合
const dialogVisible = ref(false); // 弹窗显隐标识
const checkStr = ref(''); // 选中检查项
const checkBoxList = ref([]); // 检查项集合
const checkBoxListCopy = ref([]); // 检查项集合备份数据
const selectRow = ref({});
const checkMap = ref({}); // 检查项映射关系
const editRow = ref({});
const isEdit = ref(false);

function initTable() {
	loading.value = true;
	 getDicts('f_room').then(async resp => {
		loading.value = false;
		if (resp && resp.code === 200) {
			let arr = [];
			arr = resp.data || [];
			for (let i=0; i<arr.length; i++) {
        try {
          let data = await handleExpand(arr[i].dictLabel)
					arr[i].checkArr = data
        } catch (error) {
            console.log(error)
            return
        }
    	}
			tableList.value = arr
		}
	});
	getDicts('f_form').then(resp => {
		loading.value = false;
		if (resp && resp.code === 200) {
			resp.data && resp.data.forEach(item => {
				// checkMap.value[item.dictValue] = item.dictLabel
				checkBoxListCopy.value = resp.data || []
			})
		}
	})
}

// 初始化选项
function initCheckItem(row) {
	let arr = row.checkArr || []
	let checkNameArr = []
	let checkArrTemp =  [...checkBoxListCopy.value]
	checkBoxList.value = []
	arr.forEach(subItem => {
		checkNameArr.push(subItem.formType)
	})
	checkArrTemp = checkArrTemp.filter(item => {
		return !checkNameArr.includes(item.dictLabel)
	})
	checkBoxList.value = checkArrTemp
}

function handleSetting(data) {
	checkStr.value = []
	dialogVisible.value = true
	selectRow.value = data
	isEdit.value = false
	initCheckItem(data)
}

function handleUpdate(pRow, row) {
	checkStr.value = []
	dialogVisible.value = true
	selectRow.value = pRow
	editRow.value = row
	isEdit.value = true
	initCheckItem(pRow)
}

function handleDel(row) {
	loading.value = true;
	delSettingApi(row.id).then(res => {
		loading.value = false;
		if (res && res.code === 200) {
			proxy.$modal.msgSuccess("删除成功");
			initTable()
		}
	})
}

function handleExpand(id) {
	loading.value = true;
	return new Promise((resolve,reject)=>{
		getSettingListApi({room: id}).then(res => {
			loading.value = false;
			resolve(res.rows)
		})
	})
}
const handleConfirm = () => {
	loading.value = true;
	if (isEdit.value) {
		updateSettingApi({id: editRow.value.id, room: selectRow.value.dictLabel, formType: checkStr.value}).then(res => {
			loading.value = false;
			if (res && res.code === 200) {
				proxy.$modal.msgSuccess("设置成功");
				dialogVisible.value = false
				initTable()
			}
		})
	} else {
		addSettingApi({room: selectRow.value.dictLabel, formType: checkStr.value}).then(res => {
			loading.value = false;
			if (res && res.code === 200) {
				proxy.$modal.msgSuccess("设置成功");
				dialogVisible.value = false
				initTable()
			}
		})
	}
}

initTable();

</script>
<style lang="scss" scoped>
.set-body {
	margin-top: 15px;
}

.pop-body {
	padding: 0 15px;
	
}
.checkbox-body {
	:deep(.el-radio) {
		width: 230px !important;
	}
}

</style>
