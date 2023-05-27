<template>
  <!-- 检查项目 -->
  <div class="app-container home flex-row">
    <el-col :span="18">
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never"> 患者信息 </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "基本信息" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="姓名" class="font14">
                <el-input
                  v-model="patientInfo.name"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="性别">
                <el-input
                  v-model="patientInfo.gender"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="年龄">
                <el-input
                  v-model="patientInfo.age"
                  placeholder="请输入"
                ></el-input>
              </el-form-item>
              <el-form-item label="是否首次">
                <el-radio-group v-model="patientInfo.isFirstVisit">
                  <el-radio-button label="是"></el-radio-button>
                  <el-radio-button label="否"></el-radio-button>
                </el-radio-group>
              </el-form-item>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never"> 特殊检查室 </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "视力检查" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              label-position="right"
              label-width="110px"
              :model="patientInfo"
            >
              <el-row>
                <el-row class="flex-row">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "远视力L：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "远视力R：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "近视力L：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "近视力R：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-row>
              <el-row class="flex-row">
                <el-col :span="10">
                  <el-col>
                    <el-form-item label="镜片划痕：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">( - )</el-checkbox>
                        <el-checkbox label="">( + )</el-checkbox>
                        <el-checkbox label="">( ++ )</el-checkbox>
                        <el-checkbox label="">( +++ )</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-col>
                <el-col :span="10">
                  <el-col>
                    <el-form-item label="镜架：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">( - )</el-checkbox>
                        <el-checkbox label="">( + )</el-checkbox>
                        <el-checkbox label="">( ++ )</el-checkbox>
                        <el-checkbox label="">( +++ )</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-col>
              </el-row>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
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
                  <el-select v-model="patientInfo.name" placeholder="请选择">
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
                    v-model="patientInfo.gender"
                    placeholder="请输入"
                    class="mr24 w180i"
                  ></el-input>
                  <div style="position: absolute; top: -30; right: 180px">
                    /33cm;
                  </div>
                  <el-input
                    v-model="patientInfo.gender"
                    placeholder="请输入"
                    class="ml24 w180i"
                  ></el-input>
                  <div style="position: absolute; top: 0; right: -38px">
                    /6cm;
                  </div>
                </el-form-item>
                <el-form-item label="主导眼">
                  <el-select v-model="patientInfo.name" placeholder="请选择">
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
              <el-button>重置</el-button>
              <el-button type="primary">提交</el-button>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "电脑验光" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "角膜地形图" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{
                "生物测量仪（量差、量差图标、周期（量差&周期需要公式计算的） 系统需要帮忙计算左右眼眼轴变化，（填写本次数值后，后面有历史检查记录，下面有差值显示框，选择哪个带出哪个））"
              }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "内皮细胞检查" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "MRT检查" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "干眼检查" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
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
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">
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
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">
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
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">豹纹状改变</el-checkbox>
                        <el-checkbox label="">脉络膜环</el-checkbox>
                        <el-checkbox label="">视盘边界</el-checkbox>
                        <el-checkbox label="">色</el-checkbox>
                        <el-checkbox label="">C/D</el-checkbox>
                        <el-checkbox label="">中心凹反射</el-checkbox>
                        <el-checkbox label="">出血</el-checkbox>
                        <el-checkbox label="">渗出</el-checkbox>
                        <el-checkbox label="">A/V</el-checkbox>
                        <el-checkbox label="">
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
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">豹纹状改变</el-checkbox>
                        <el-checkbox label="">脉络膜环</el-checkbox>
                        <el-checkbox label="">视盘边界</el-checkbox>
                        <el-checkbox label="">色</el-checkbox>
                        <el-checkbox label="">C/D</el-checkbox>
                        <el-checkbox label="">中心凹反射</el-checkbox>
                        <el-checkbox label="">出血</el-checkbox>
                        <el-checkbox label="">渗出</el-checkbox>
                        <el-checkbox label="">A/V</el-checkbox>
                        <el-checkbox label="">
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
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "眼压" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              label-position="right"
              label-width="110px"
              :model="patientInfo"
            >
              <el-row class="mb16">
                <el-radio-group
                  v-model="labelPosition"
                  size=""
                  @change="typeOnChange"
                >
                  <el-radio-button :label="true">指测法</el-radio-button>
                  <el-radio-button :label="false">Icare</el-radio-button>
                </el-radio-group>
              </el-row>
              <el-row>
                <el-row class="flex-row w100i">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "眼压L：" }}
                    </div>
                    <el-form-item label="眼压" class="font14">
                      <el-select
                        v-if="labelPosition"
                        v-model="patientInfo.selectIop"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in IopOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                      <div v-else>
                        <el-input
                          v-model="patientInfo.selectIop"
                          class="mr24 w180i"
                          placeholder="请输入"
                        ></el-input>
                        <div style="position: absolute; top: 0; left: 185px">
                          (mmhg)
                        </div>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "眼压R：" }}
                    </div>
                    <el-form-item label="眼压" class="font14">
                      <el-select
                        v-if="labelPosition"
                        v-model="patientInfo.selectIop"
                        placeholder="请选择"
                      >
                        <el-option
                          v-for="item in IopOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                      <div v-else>
                        <el-input
                          v-model="patientInfo.selectIop"
                          class="mr24 w180i"
                          placeholder="请输入"
                        ></el-input>
                        <div style="position: absolute; top: 0; left: 185px">
                          (mmhg)
                        </div>
                      </div>
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
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "角膜接触镜片上电脑验光" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "角膜接触镜片上角膜地形图" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never"> 验光室 </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "视力检查" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              label-position="right"
              label-width="110px"
              :model="patientInfo"
            >
              <el-row>
                <el-row class="flex-row">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "远视力L：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "远视力R：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "近视力L：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "近视力R：" }}
                    </div>
                    <el-form-item label="裸眼" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="框架">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="片上" class="font14">
                      <el-input
                        v-model="patientInfo.name"
                        placeholder="请输入"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-row>
              <el-row class="flex-row">
                <el-col :span="10">
                  <el-col>
                    <el-form-item label="镜片划痕：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">( - )</el-checkbox>
                        <el-checkbox label="">( + )</el-checkbox>
                        <el-checkbox label="">( ++ )</el-checkbox>
                        <el-checkbox label="">( +++ )</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-col>
                <el-col :span="10">
                  <el-col>
                    <el-form-item label="镜架：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">( - )</el-checkbox>
                        <el-checkbox label="">( + )</el-checkbox>
                        <el-checkbox label="">( ++ )</el-checkbox>
                        <el-checkbox label="">( +++ )</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-col>
              </el-row>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "检影(写法待定)" }}</span>
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
                        v-for="item in convergeOptions"
                        :key="item.value"
                        :label="item.label"
                        :value="item.value"
                      >
                      </el-option>
                    </el-select>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="R">
                    <el-input
                      v-model="patientInfo.selectIop"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="X">
                    <el-input
                      v-model="patientInfo.selectIop"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="L">
                    <el-input
                      v-model="patientInfo.selectIop"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                    <el-input
                      v-model="patientInfo.selectIop"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                  </el-form-item>
                </el-row>
                <el-row>
                  <el-form-item label="R">
                    <el-input
                      v-model="patientInfo.selectIop"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                    <div style="padding-right: 20px">X</div>
                    <el-input
                      v-model="patientInfo.selectIop"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                  </el-form-item>
                  <el-form-item label="L">
                    <el-input
                      v-model="patientInfo.selectIop"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                    <el-input
                      v-model="patientInfo.selectIop"
                      class="mr24 w180i"
                      placeholder="请输入"
                    ></el-input>
                  </el-form-item>
                </el-row>
              </el-row>

              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "视功能检查" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
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
                  <el-select v-model="patientInfo.name" placeholder="请选择">
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
                    v-model="patientInfo.gender"
                    placeholder="请输入"
                    class="mr24 w180i"
                  ></el-input>
                  <div style="position: absolute; top: -30; right: 180px">
                    /33cm;
                  </div>
                  <el-input
                    v-model="patientInfo.gender"
                    placeholder="请输入"
                    class="ml24 w180i"
                  ></el-input>
                  <div style="position: absolute; top: 0; right: -38px">
                    /6cm;
                  </div>
                </el-form-item>
                <el-form-item label="主导眼">
                  <el-select v-model="patientInfo.name" placeholder="请选择">
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
              <el-button>重置</el-button>
              <el-button type="primary">提交</el-button>
            </el-row>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "主观验光" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "试戴" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "角膜接触镜片上主观验光" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "角膜接触镜片上检影" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "取镜" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>

      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never">
          诊室1-1 诊室1-2 诊室3-1 诊室3-2
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "裂隙灯检查" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              label-position="right"
              label-width="150px"
              :model="patientInfo"
            >
              <el-row class="font16 fontW600 mb20"> 初诊 </el-row>
              <el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="瞬目L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">不完全</el-checkbox>
                        <el-checkbox style="width: 140px; height: 32px" label=""
                          ><el-input
                            placeholder="频率  "
                            v-model="patientInfo.name"
                            style="width: 80px"
                          >
                          </el-input>
                          <div
                            style="
                              position: absolute;
                              top: 0;
                              right: 0;
                              height: 32px;
                              line-height: 32px;
                            "
                          >
                            次/分
                          </div>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="瞬目R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">不完全</el-checkbox>
                        <el-checkbox style="width: 140px; height: 32px" label=""
                          ><el-input
                            placeholder="频率  "
                            v-model="patientInfo.name"
                            style="width: 80px"
                          >
                          </el-input>
                          <div
                            style="
                              position: absolute;
                              top: 0;
                              right: 0;
                              height: 32px;
                              line-height: 32px;
                            "
                          >
                            次/分
                          </div>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "泪液检查L：" }}
                    </div>
                    <el-form-item label="BUT L：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                      <div style="position: absolute; top: 0; left: 185px">
                        "
                      </div>
                    </el-form-item>
                    <el-form-item label="Schirmer I Test L：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                      <div style="position: absolute; top: 0; left: 185px">
                        mm/5min
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "泪液检查R：" }}
                    </div>
                    <el-form-item label="BUT R：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                      <div style="position: absolute; top: 0; left: 185px">
                        "
                      </div>
                    </el-form-item>
                    <el-form-item label="Schirmer I Test R：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                      <div style="position: absolute; top: 0; left: 185px">
                        mm/5min
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="泪器L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">泪腺肿大</el-checkbox>
                        <el-checkbox label="">流泪</el-checkbox>
                        <el-checkbox label="">溢泪</el-checkbox>
                        <el-checkbox label="">压迫泪囊脓性分泌物</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="泪器R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">泪腺肿大</el-checkbox>
                        <el-checkbox label="">流泪</el-checkbox>
                        <el-checkbox label="">溢泪</el-checkbox>
                        <el-checkbox label="">压迫泪囊脓性分泌物</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="眼球运动L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="眼球运动R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="眼睑L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">睑板腺开口阻塞</el-checkbox>
                        <el-checkbox label="">红肿</el-checkbox>
                        <el-checkbox label="">睑板腺囊肿</el-checkbox>
                        <el-checkbox label="">压痛</el-checkbox>
                        <el-checkbox
                          style="width: 165px; height: 32px"
                          label=""
                        >
                          <div style="height: 32px; line-height: 32px">
                            眼睑张力
                          </div>
                          <el-select
                            v-model="patientInfo.name"
                            placeholder="请选择"
                            style="
                              width: 85px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                            <el-option
                              v-for="item in tensionOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="眼睑R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">睑板腺开口阻塞</el-checkbox>
                        <el-checkbox label="">红肿</el-checkbox>
                        <el-checkbox label="">睑板腺囊肿</el-checkbox>
                        <el-checkbox label="">压痛</el-checkbox>
                        <el-checkbox
                          style="width: 165px; height: 32px"
                          label=""
                        >
                          <div style="height: 32px; line-height: 32px">
                            眼睑张力
                          </div>
                          <el-select
                            v-model="patientInfo.name"
                            placeholder="请选择"
                            style="
                              width: 85px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                            <el-option
                              v-for="item in tensionOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="睑结膜L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">充血</el-checkbox>
                        <el-checkbox label="">乳头</el-checkbox>
                        <el-checkbox label="">滤泡</el-checkbox>
                        <el-checkbox label="">结石</el-checkbox>
                        <el-checkbox label="">
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
                    <el-form-item label="睑结膜R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">充血</el-checkbox>
                        <el-checkbox label="">乳头</el-checkbox>
                        <el-checkbox label="">滤泡</el-checkbox>
                        <el-checkbox label="">结石</el-checkbox>
                        <el-checkbox label="">
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
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="角膜R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">光滑透明</el-checkbox>
                        <el-checkbox
                          style="width: 220px; height: 32px"
                          label=""
                        >
                          <div style="height: 32px; line-height: 32px">
                            横径
                          </div>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm/BTB"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 85px;
                            "
                          >
                          </el-input>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm/GTG"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                          </el-input>
                        </el-checkbox>
                        <el-checkbox label="">上皮剥落</el-checkbox>
                        <el-checkbox label="">浸润</el-checkbox>
                        <el-checkbox label="">水肿</el-checkbox>
                        <el-checkbox label="">瘢痕</el-checkbox>
                        <el-checkbox label="">新生血管</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="角膜L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">光滑透明</el-checkbox>
                        <el-checkbox
                          style="width: 220px; height: 32px"
                          label=""
                        >
                          <div style="height: 32px; line-height: 32px">
                            横径
                          </div>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm/BTB"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 85px;
                            "
                          >
                          </el-input>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm/GTG"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                          </el-input>
                        </el-checkbox>
                        <el-checkbox label="">上皮剥落</el-checkbox>
                        <el-checkbox label="">浸润</el-checkbox>
                        <el-checkbox label="">水肿</el-checkbox>
                        <el-checkbox label="">瘢痕</el-checkbox>
                        <el-checkbox label="">新生血管</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="前房L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">常深</el-checkbox>
                        <el-checkbox label="">浅</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="前房R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">常深</el-checkbox>
                        <el-checkbox label="">浅</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="虹膜L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">纹理清晰</el-checkbox>
                        <el-checkbox label="">水肿</el-checkbox>
                        <el-checkbox label="">结节</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="虹膜R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">纹理清晰</el-checkbox>
                        <el-checkbox label="">水肿</el-checkbox>
                        <el-checkbox label="">结节</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="瞳孔L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox
                          style="width: 270px; height: 32px"
                          label=""
                        >
                          <div style="height: 82px; line-height: 82px">
                            直径(明/暗)
                          </div>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 85px;
                            "
                          >
                          </el-input>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                          </el-input>
                        </el-checkbox>
                        <el-checkbox
                          style="width: 270px; height: 32px"
                          label=""
                        >
                          <div style="height: 82px; line-height: 82px">
                            直接对光反射
                          </div>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 75px;
                            "
                          >
                          </el-input>
                        </el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="瞳孔R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox
                          style="width: 270px; height: 32px"
                          label=""
                        >
                          <div style="height: 82px; line-height: 82px">
                            直径(明/暗)
                          </div>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 85px;
                            "
                          >
                          </el-input>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                          </el-input>
                        </el-checkbox>
                        <el-checkbox
                          style="width: 270px; height: 32px"
                          label=""
                        >
                          <div style="height: 82px; line-height: 82px">
                            直接对光反射
                          </div>
                          <el-input
                            v-model="patientInfo.name"
                            placeholder="mm"
                            style="
                              width: 80px;
                              position: absolute;
                              top: 0;
                              right: 75px;
                            "
                          >
                          </el-input>
                        </el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="晶状体L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">透明</el-checkbox>
                        <el-checkbox
                          style="width: 140px; height: 32px"
                          label=""
                        >
                          <div style="height: 32px; line-height: 32px">
                            混浊
                          </div>
                          <el-select
                            v-model="patientInfo.name"
                            placeholder="请选择"
                            style="
                              width: 85px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                            <el-option
                              v-for="item in tensionOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="晶状体R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">透明</el-checkbox>
                        <el-checkbox
                          style="width: 140px; height: 32px"
                          label=""
                        >
                          <div style="height: 32px; line-height: 32px">
                            混浊
                          </div>
                          <el-select
                            v-model="patientInfo.name"
                            placeholder="请选择"
                            style="
                              width: 85px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                            <el-option
                              v-for="item in tensionOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-divider></el-divider>
              </el-row>
              <el-row class="font16 fontW600 mb20"> 复诊 </el-row>
              <el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "镜片L：" }}
                    </div>
                    <el-form-item label="清洁度 L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">良</el-checkbox>
                        <el-checkbox label="">蛋白</el-checkbox>
                        <el-checkbox label="">油脂</el-checkbox>
                        <el-checkbox label="">(+)</el-checkbox>
                        <el-checkbox label="">(++)</el-checkbox>
                        <el-checkbox label="">(+++)</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="划痕 L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">(-)</el-checkbox>
                        <el-checkbox label="">(+)</el-checkbox>
                        <el-checkbox label="">(++)</el-checkbox>
                        <el-checkbox label="">(+++)</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="其他 L：" class="ml42">
                      <el-input
                        placeholder="请输入"
                        type="textarea"
                        v-model="textarea"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "镜片R：" }}
                    </div>
                    <el-form-item label="清洁度 R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">良</el-checkbox>
                        <el-checkbox label="">蛋白</el-checkbox>
                        <el-checkbox label="">油脂</el-checkbox>
                        <el-checkbox label="">(+)</el-checkbox>
                        <el-checkbox label="">(++)</el-checkbox>
                        <el-checkbox label="">(+++)</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="划痕 R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">(-)</el-checkbox>
                        <el-checkbox label="">(+)</el-checkbox>
                        <el-checkbox label="">(++)</el-checkbox>
                        <el-checkbox label="">(+++)</el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                    <el-form-item label="其他 R：" class="ml42">
                      <el-input
                        placeholder="请输入"
                        type="textarea"
                        v-model="textarea"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="眼表健康L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">角膜光滑透明</el-checkbox>
                        <el-checkbox
                          style="width: 165px; height: 32px"
                          label=""
                        >
                          <div style="height: 32px; line-height: 32px">
                            角膜点染
                          </div>
                          <el-select
                            v-model="patientInfo.name"
                            placeholder="请选择"
                            style="
                              width: 85px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                            <el-option
                              v-for="item in tensionOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </el-checkbox>
                        <el-checkbox label="">睑板腺开口阻塞</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="眼表健康R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">角膜光滑透明</el-checkbox>
                        <el-checkbox
                          style="width: 165px; height: 32px"
                          label=""
                        >
                          <div style="height: 32px; line-height: 32px">
                            角膜点染
                          </div>
                          <el-select
                            v-model="patientInfo.name"
                            placeholder="请选择"
                            style="
                              width: 85px;
                              position: absolute;
                              top: 0;
                              right: 0;
                            "
                          >
                            <el-option
                              v-for="item in tensionOptions"
                              :key="item.value"
                              :label="item.label"
                              :value="item.value"
                            >
                            </el-option>
                          </el-select>
                        </el-checkbox>
                        <el-checkbox label="">睑板腺开口阻塞</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "泪液检查L：" }}
                    </div>
                    <el-form-item label="BUT L：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                      <div style="position: absolute; top: 0; left: 185px">
                        "
                      </div>
                    </el-form-item>
                    <el-form-item label="Schirmer I Test L：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                      <div style="position: absolute; top: 0; left: 185px">
                        mm/5min
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "泪液检查R：" }}
                    </div>
                    <el-form-item label="BUT R：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                      <div style="position: absolute; top: 0; left: 185px">
                        "
                      </div>
                    </el-form-item>
                    <el-form-item label="Schirmer I Test R：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                      <div style="position: absolute; top: 0; left: 185px">
                        mm/5min
                      </div>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <el-form-item label="配试状态L：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label=""> 0 级</el-checkbox>
                        <el-checkbox label="">Ⅰ级</el-checkbox>
                        <el-checkbox label="">Ⅱ级</el-checkbox>
                        <el-checkbox label="">Ⅲ级</el-checkbox>
                        <el-checkbox label="">Ⅳ级</el-checkbox>
                        <el-checkbox label="">睑板腺开口阻塞</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <el-form-item label="配试状态R：" class="ml42">
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label=""> 0 级</el-checkbox>
                        <el-checkbox label="">Ⅰ级</el-checkbox>
                        <el-checkbox label="">Ⅱ级</el-checkbox>
                        <el-checkbox label="">Ⅲ级</el-checkbox>
                        <el-checkbox label="">Ⅳ级</el-checkbox>
                        <el-checkbox label="">睑板腺开口阻塞</el-checkbox>
                        <el-checkbox label="">
                          <el-input
                            type="textarea"
                            placeholder="其他"
                            v-model="textarea"
                            :autosize="{ minRows: 1, maxRows: 1 }"
                            show-word-limit
                            style="width: 180px"
                          >
                          </el-input>
                        </el-checkbox>
                      </el-checkbox-group>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row class="flex-row w100i mb10">
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "片上检影L：" }}
                    </div>
                    <el-form-item label="R：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="X：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="R：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="X：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="12">
                    <div class="ml42 mb16 font14 fontW600">
                      {{ "片上检影R：" }}
                    </div>
                    <el-form-item label="R：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="X：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="R：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
                    </el-form-item>
                    <el-form-item label="X：" class="ml42">
                      <el-input
                        v-model="patientInfo.gender"
                        placeholder="请输入"
                        class="mr24 w180i"
                      ></el-input>
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
      </el-col>
      <el-col class="card-box">
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
                  <el-checkbox-group v-model="patientInfo.list">
                    <el-checkbox label="">3%丽爱思</el-checkbox>
                    <el-checkbox label="">0.3%爱丽</el-checkbox>
                    <el-checkbox label="">0.3%爱丽(MINI)</el-checkbox>
                    <el-checkbox label="">0.1%海露 滴眼液</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
                <el-form-item label="使用(次/日)：" class="ml42">
                  <el-input
                    v-model="patientInfo.gender"
                    placeholder="请输入"
                    class="mr24 w180i"
                  ></el-input>
                  <div>滴双眼</div>
                </el-form-item>
              </el-row>
              <el-row>
                <el-form-item label="处理意见：" class="ml42">
                  <el-checkbox-group v-model="patientInfo.list">
                    <el-checkbox label=""
                      >注意用眼卫生，多做户外活动</el-checkbox
                    >
                    <el-checkbox label="">辐辏训练</el-checkbox>
                    <el-checkbox label="">调节训练</el-checkbox>
                    <el-checkbox label="">注意镜片位置</el-checkbox>
                    <el-checkbox label="">注意镜片清洁度</el-checkbox>
                  </el-checkbox-group>
                </el-form-item>
              </el-row>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
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
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">
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
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">
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
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">豹纹状改变</el-checkbox>
                        <el-checkbox label="">脉络膜环</el-checkbox>
                        <el-checkbox label="">视盘边界</el-checkbox>
                        <el-checkbox label="">色</el-checkbox>
                        <el-checkbox label="">C/D</el-checkbox>
                        <el-checkbox label="">中心凹反射</el-checkbox>
                        <el-checkbox label="">出血</el-checkbox>
                        <el-checkbox label="">渗出</el-checkbox>
                        <el-checkbox label="">A/V</el-checkbox>
                        <el-checkbox label="">
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
                      <el-checkbox-group v-model="patientInfo.list">
                        <el-checkbox label="">正常</el-checkbox>
                        <el-checkbox label="">豹纹状改变</el-checkbox>
                        <el-checkbox label="">脉络膜环</el-checkbox>
                        <el-checkbox label="">视盘边界</el-checkbox>
                        <el-checkbox label="">色</el-checkbox>
                        <el-checkbox label="">C/D</el-checkbox>
                        <el-checkbox label="">中心凹反射</el-checkbox>
                        <el-checkbox label="">出血</el-checkbox>
                        <el-checkbox label="">渗出</el-checkbox>
                        <el-checkbox label="">A/V</el-checkbox>
                        <el-checkbox label="">
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
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "检影" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never"> 摘戴室 </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "试戴" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "取片" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item label="待定" class="font14"> </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "视功能训练" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never"> 咨询室 </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "知情同意书签字" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never"> 其他单据 </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "单据" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form
              :inline="true"
              label-position="right"
              label-width="80px"
              :model="patientInfo"
            >
              <el-form-item
                label="上传附件"
                class="font14"
                style="margin-bottom: 0px"
              >
                <UploadFile />
              </el-form-item>
              <el-row class="card-btn">
                <el-button>重置</el-button>
                <el-button type="primary">提交</el-button>
              </el-row>
            </el-form>
          </div>
        </el-card>
      </el-col>
    </el-col>

    <!-- right -->
    <el-col :span="6">
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never"> 挂号列表 </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "患者列表" }}</span>
            </div>
          </template>
          <div class="body">
            <div v-for="(item, index) in patientList" :key="index">
              <div class="flex-row just-between text-center">
                <div class="patient">
                  {{ `${item.label}挂号排序${index + 1}` }}
                </div>
                <div>
                  <el-button style="height: 28px" type="text">选择</el-button>
                </div>
              </div>
              <el-divider v-if="index !== 4"></el-divider>
            </div>
          </div>
        </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="font18 fontW600" shadow="never"> 指派 </el-card>
      </el-col>
      <el-col class="card-box">
        <el-card class="update-log" shadow="never">
          <template v-slot:header>
            <div class="clearfix">
              <span class="font14">{{ "指派医生" }}</span>
            </div>
          </template>
          <div class="body">
            <el-form label-position="right" :model="patientInfo">
              <el-form-item label="医生" class="font14">
                <el-select
                  v-model="patientInfo.selectDoc"
                  placeholder="请选择"
                  clearable
                  class="w100i"
                >
                  <el-option
                    v-for="item in docOption"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  />
                </el-select>
              </el-form-item>
            </el-form>
            <el-row class="card-btn">
              <el-button>重置</el-button>
              <el-button type="primary" @click="gotoAssign">指派</el-button>
            </el-row>
          </div>
        </el-card>
      </el-col>
    </el-col>
  </div>
  <!-- <el-backtop target=".page-component__scroll .el-scrollbar__wrap" :bottom="100">
    <div
      style="{
        height: 100%;
        width: 100%;
        background-color: #f2f5f6;
        box-shadow: 0 0 6px rgba(0,0,0, .12);
        text-align: center;
        line-height: 40px;
        color: #1989fa;
      }"
    >
      回到顶部
    </div>
  </el-backtop> -->
  <el-backtop></el-backtop>
</template>
  
<script setup name="Index">
import icon_time from "/src/assets/icons/svg/time.svg";
import { getCache } from "@/api/monitor/cache";
import * as echarts from "echarts";
import UploadFile from "/src/components/FileUpload/index.vue";

const patientInfo = ref({
  name: "",
  gender: "",
  age: "",
  isFirstVisit: "是",
  list: [],
  selectIop: "",
  selectDoc: "",
  slecetTag: [],
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
const IopOptions = ref([
  {
    value: "Tn-3",
    label: "Tn-3",
  },
  {
    value: "Tn-2",
    label: "Tn-2",
  },
  {
    value: "Tn-1",
    label: "Tn-1",
  },
  {
    value: "Tn",
    label: "Tn",
  },
  {
    value: "Tn+1",
    label: "Tn+1",
  },
  {
    value: "Tn+2",
    label: "Tn+2",
  },
  {
    value: "Tn+3",
    label: "Tn+3",
  },
]);
const symbolOptions = ref([
  {
    value: "+",
    label: "+",
  },
  {
    value: "-",
    label: "-",
  },
  {
    value: "±",
    label: "±",
  },
]);
const numOptions = ref([
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
]);
const unitOptions = ref([
  {
    value: "1",
    label: "右眼抑制",
  },
  {
    value: "2",
    label: "左眼抑制",
  },
  {
    value: "3",
    label: "正常",
  },
]);
const tensionOptions = ref([
  {
    value: "1",
    label: "正常",
  },
  {
    value: "2",
    label: "紧张",
  },
  {
    value: "3",
    label: "松弛",
  },
]);

const patientList = ref([
  {
    value: "患者A",
    label: "患者A",
  },
  {
    value: "患者B",
    label: "患者B",
  },
  {
    value: "患者C",
    label: "患者C",
  },
  {
    value: "患者D",
    label: "患者D",
  },
  {
    value: "患者E",
    label: "患者E",
  },
]);
const docOption = ref([
  {
    value: "0",
    label: "医生A",
  },
  {
    value: "1",
    label: "医生B",
  },
  {
    value: "2",
    label: "医生C",
  },
]);
const textarea = ref("");
const labelPosition = ref(true);

function typeOnChange(value) {
  if (!value !== value) {
    patientInfo.value.selectIop = "";
  }
  console.log("first", value, patientInfo.value.selectIop);
}

console.log("patientList", patientList.value.lenght);

const cache = ref([]);
const commandstats = ref(null);
const usedmemory = ref(null);
const { proxy } = getCurrentInstance();

// const version = ref("3.8.5");
const dataList = ref([
  {
    title: "预约",
    name: "预约数",
    icon: icon_time,
    count: 10,
  },
  {
    title: "提醒",
    name: "提醒数",
    icon: icon_time,
    count: 10,
  },
  {
    title: "今日",
    name: "已完成",
    icon: icon_time,
    count: 10,
  },
]);

function gotoAssign() {
  proxy.$modal.msgSuccess("指派成功");
  patientInfo.value.selectDoc = "";
}
function getList() {
  proxy.$modal.loading("正在加载缓存监控数据，请稍候！");
  getCache().then((response) => {
    proxy.$modal.closeLoading();
    cache.value = response.data;

    const commandstatsIntance = echarts.init(commandstats.value, "macarons");
    commandstatsIntance.setOption({
      tooltip: {
        trigger: "item",
        formatter: "{a} <br/>{b} : {c} ({d}%)",
      },
      series: [
        {
          name: "命令",
          type: "pie",
          roseType: "radius",
          radius: [15, 95],
          center: ["50%", "38%"],
          data: response.data.commandStats,
          animationEasing: "cubicInOut",
          animationDuration: 1000,
        },
      ],
    });

    const usedmemoryInstance = echarts.init(usedmemory.value, "macarons");
    usedmemoryInstance.setOption({
      tooltip: {
        formatter: "{b} <br/>{a} : " + cache.value.info.used_memory_human,
      },
      series: [
        {
          name: "峰值",
          type: "gauge",
          min: 0,
          max: 1000,
          detail: {
            formatter: cache.value.info.used_memory_human,
          },
          data: [
            {
              value: parseFloat(cache.value.info.used_memory_human),
              name: "内存消耗",
            },
          ],
        },
      ],
    });
  });
}

getList();

// function goTarget(url) {
//   window.open(url, "__blank");
// }
</script>
  
  <style scoped lang="scss">
.home {
  blockquote {
    padding: 10px 20px;
    margin: 0 0 20px;
    font-size: 17.5px;
    border-left: 5px solid #eee;
  }
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }
  .col-item {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    margin: 0;
  }

  font-family: "open sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  color: #676a6c;
  overflow-x: hidden;

  ul {
    list-style-type: none;
  }

  h4 {
    margin-top: 0px;
  }

  h2 {
    margin-top: 10px;
    font-size: 26px;
    font-weight: 100;
  }

  p {
    margin-top: 10px;

    b {
      font-weight: 700;
    }
  }

  .update-log {
    ol {
      display: block;
      list-style-type: decimal;
      margin-block-start: 1em;
      margin-block-end: 1em;
      margin-inline-start: 0;
      margin-inline-end: 0;
      padding-inline-start: 40px;
    }
  }
}

:deep(.el-card) {
  border: none;
}

.patient {
  font-size: 14px;
  line-height: 14px;
  padding: 8px 0 10px 0;
}
:deep(.el-divider--horizontal) {
  margin: 12px 0;
}
</style>
  
  