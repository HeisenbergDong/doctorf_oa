<!-- 裂隙灯检查 -->
<template>
  <div class="visual-inspect">
    <div class="item-body">
      <div class="item-title">初诊：</div>
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
          <span class="item-table-text">瞬 目</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.scardamyxisR">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'不完全'">不完全</el-checkbox>
              <el-checkbox
                style="width: 140px; height: 32px"
                :label="frequencyR"
                ><el-input
                  placeholder="频率  "
                  v-model="frequencyR"
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
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.scardamyxisL">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'不完全'">不完全</el-checkbox>
              <el-checkbox
                style="width: 140px; height: 32px"
                :label="frequencyL"
                ><el-input
                  placeholder="频率  "
                  v-model="frequencyL"
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
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">泪液检查</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">BUT：</div>
            <el-input
                    v-model="patientInfo.butR"
                    placeholder="请输入"
                    class="mr24 w180i"
                  ></el-input>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">BUT：</div>
            <el-input
              v-model="patientInfo.butL"
              placeholder="请输入"
              class="mr24 w180i"
            ></el-input>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">泪 器</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.apparatusLacrimalisR">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'泪腺肿大'">泪腺肿大</el-checkbox>
              <el-checkbox :label="'流泪'">流泪</el-checkbox>
              <el-checkbox :label="'溢泪'">溢泪</el-checkbox>
              <el-checkbox :label="'压迫泪囊脓性分泌物'"
                >压迫泪囊脓性分泌物</el-checkbox
              >
              <el-checkbox :label="apparatusTextL">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="apparatusTextR"
                  :autosize="{ minRows: 1, maxRows: 1 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.apparatusLacrimalisL">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'泪腺肿大'">泪腺肿大</el-checkbox>
              <el-checkbox :label="'流泪'">流泪</el-checkbox>
              <el-checkbox :label="'溢泪'">溢泪</el-checkbox>
              <el-checkbox :label="'压迫泪囊脓性分泌物'"
                >压迫泪囊脓性分泌物</el-checkbox
              >
              <el-checkbox :label="apparatusTextL">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="apparatusTextL"
                  :autosize="{ minRows: 1, maxRows: 1 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">眼球运动</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.eyemoveR">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="eyemoveTextR">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="eyemoveTextR"
                  :autosize="{ minRows: 1, maxRows: 1 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.eyemoveL">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="eyemoveTextL">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="eyemoveTextL"
                  :autosize="{ minRows: 1, maxRows: 1 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">眼 睑</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.eyelidR">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'睑板腺开口阻塞'"
                >睑板腺开口阻塞</el-checkbox
              >
              <el-checkbox :label="'红肿'">红肿</el-checkbox>
              <el-checkbox :label="'睑板腺囊肿'">睑板腺囊肿</el-checkbox>
              <el-checkbox :label="'压痛'">压痛</el-checkbox>
              <el-checkbox
                style="width: 165px; height: 32px"
                :label="eyelidToneR"
              >
                <div style="height: 32px; line-height: 32px">
                  眼睑张力
                </div>
                <el-select
                  v-model="eyelidToneR"
                  placeholder="请选择"
                  style="
                    width: 85px;
                    position: absolute;
                    top: 0;
                    right: 0;
                  "
                >
                  <el-option
                    v-for="item in eyelidOptions"
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
                  v-model="eyelidTextR"
                  :autosize="{ minRows: 1, maxRows: 1 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.eyelidL">
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'睑板腺开口阻塞'"
                >睑板腺开口阻塞</el-checkbox
              >
              <el-checkbox :label="'红肿'">红肿</el-checkbox>
              <el-checkbox :label="'睑板腺囊肿'">睑板腺囊肿</el-checkbox>
              <el-checkbox :label="'压痛'">压痛</el-checkbox>
              <el-checkbox
                style="width: 165px; height: 32px"
                :label="eyelidToneL"
              >
                <div style="height: 32px; line-height: 32px">
                  眼睑张力
                </div>
                <el-select
                  v-model="eyelidToneL"
                  placeholder="请选择"
                  style="
                    width: 85px;
                    position: absolute;
                    top: 0;
                    right: 0;
                  "
                >
                  <el-option
                    v-for="item in eyelidOptions"
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
                  v-model="eyelidTextL"
                  :autosize="{ minRows: 1, maxRows: 1 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">睑结膜</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group
              v-model="patientInfo.palpebralConjunctivaR"
            >
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'充血'">充血</el-checkbox>
              <el-checkbox :label="'乳头'">乳头</el-checkbox>
              <el-checkbox :label="'滤泡'">滤泡</el-checkbox>
              <el-checkbox :label="'结石'">结石</el-checkbox>
              <el-checkbox label="palpebralTextR">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="palpebralTextR"
                  :autosize="{ minRows: 1, maxRows: 2 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group
              v-model="patientInfo.palpebralConjunctivaL"
            >
              <el-checkbox :label="'正常'">正常</el-checkbox>
              <el-checkbox :label="'充血'">充血</el-checkbox>
              <el-checkbox :label="'乳头'">乳头</el-checkbox>
              <el-checkbox :label="'滤泡'">滤泡</el-checkbox>
              <el-checkbox :label="'结石'">结石</el-checkbox>
              <el-checkbox :label="palpebralTextL">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="palpebralTextL"
                  :autosize="{ minRows: 1, maxRows: 2 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <!-- <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">球结膜</span>
        </div>
        <div class="item-table">
          <div class="table-row">
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
          </div>
        </div>
      </div> -->
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">角 膜</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.corneaR">
              <el-checkbox :label="'光滑透明'">光滑透明</el-checkbox>
              <el-checkbox
                style="width: 220px; height: 32px"
                :label="transverseR"
              >
                <div style="height: 32px; line-height: 32px">横径</div>
                <el-input
                  v-model="transverseR"
                  placeholder="mm/BTB;mm/GTG"
                  style="
                    width: 150px;
                    position: absolute;
                    top: 0;
                    right: 0;
                  "
                >
                </el-input>
                <!-- <el-input
                  v-model="gtgL"
                  placeholder="mm/GTG"
                  style="
                    width: 80px;
                    position: absolute;
                    top: 0;
                    right: 0;
                  "
                >
                </el-input> -->
              </el-checkbox>
              <el-checkbox :label="'上皮剥落'">上皮剥落</el-checkbox>
              <el-checkbox :label="'浸润'">浸润</el-checkbox>
              <el-checkbox :label="'水肿'">水肿</el-checkbox>
              <el-checkbox :label="'瘢痕'">瘢痕</el-checkbox>
              <el-checkbox :label="'新生血管'">新生血管</el-checkbox>
              <el-checkbox :label="corneaTextR">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="corneaTextR"
                  :autosize="{ minRows: 1, maxRows: 1 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.corneaL">
              <el-checkbox :label="'光滑透明'">光滑透明</el-checkbox>
              <el-checkbox
                style="width: 220px; height: 32px"
                :label="transverseL"
              >
                <div style="height: 32px; line-height: 32px">横径</div>
                <el-input
                  v-model="transverseL"
                  placeholder="mm/BTB;mm/GTG"
                  style="
                    width: 150px;
                    position: absolute;
                    top: 0;
                    right: 0;
                  "
                >
                </el-input>
                <!-- <el-input
                  v-model="gtgL"
                  placeholder="mm/GTG"
                  style="
                    width: 80px;
                    position: absolute;
                    top: 0;
                    right: 0;
                  "
                >
                </el-input> -->
              </el-checkbox>
              <el-checkbox :label="'上皮剥落'">上皮剥落</el-checkbox>
              <el-checkbox :label="'浸润'">浸润</el-checkbox>
              <el-checkbox :label="'水肿'">水肿</el-checkbox>
              <el-checkbox :label="'瘢痕'">瘢痕</el-checkbox>
              <el-checkbox :label="'新生血管'">新生血管</el-checkbox>
              <el-checkbox :label="corneaTextL">
                <el-input
                  type="textarea"
                  placeholder="其他"
                  v-model="corneaTextL"
                  :autosize="{ minRows: 1, maxRows: 1 }"
                  show-word-limit
                  style="width: 180px"
                >
                </el-input>
              </el-checkbox>
            </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">前 房</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.atriaR">
                    <el-checkbox :label="'常深'">常深</el-checkbox>
                    <el-checkbox :label="'浅'">浅</el-checkbox>
                    <el-checkbox :label="atriaTextR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="atriaTextR"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.atriaL">
                    <el-checkbox :label="'常深'">常深</el-checkbox>
                    <el-checkbox :label="'浅'">浅</el-checkbox>
                    <el-checkbox :label="atriaTextL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="atriaTextL"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">虹 膜</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.irisR">
                    <el-checkbox :label="'纹理清晰'">纹理清晰</el-checkbox>
                    <el-checkbox :label="'水肿'">水肿</el-checkbox>
                    <el-checkbox :label="'结节'">结节</el-checkbox>
                    <el-checkbox :label="irisTextR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="irisTextR"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.irisL">
                    <el-checkbox :label="'纹理清晰'">纹理清晰</el-checkbox>
                    <el-checkbox :label="'水肿'">水肿</el-checkbox>
                    <el-checkbox :label="'结节'">结节</el-checkbox>
                    <el-checkbox :label="irisTextL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="irisTextL"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">瞳 孔</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.pupilR">
                    <el-checkbox
                      style="width: 270px; height: 32px"
                      :label="diameterR"
                    >
                      <div style="height: 82px; line-height: 82px">
                        直径(明/暗)
                      </div>
                      <el-input
                        v-model="diameterR"
                        placeholder="mm;mm"
                        style="
                          width: 150px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                      </el-input>
                      <!-- <el-input
                        v-model="patientInfo.name"
                        placeholder="mm"
                        style="
                          width: 80px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                      </el-input> -->
                    </el-checkbox>
                    <el-checkbox
                      style="width: 270px; height: 32px"
                      :label="lightReflexR"
                    >
                      <div style="height: 82px; line-height: 82px">
                        直接对光反射
                      </div>
                      <el-input
                        v-model="lightReflexR"
                        placeholder="mm"
                        style="
                          width: 150px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                      </el-input>
                    </el-checkbox>
                    <el-checkbox :label="pupilTextR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="pupilTextR"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.pupilL">
                    <el-checkbox
                      style="width: 270px; height: 32px"
                      :label="diameterL"
                    >
                      <div style="height: 82px; line-height: 82px">
                        直径(明/暗)
                      </div>
                      <el-input
                        v-model="diameterL"
                        placeholder="mm;mm"
                        style="
                          width: 150px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                      </el-input>
                      <!-- <el-input
                        v-model="patientInfo.name"
                        placeholder="mm"
                        style="
                          width: 80px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                      </el-input> -->
                    </el-checkbox>
                    <el-checkbox
                      style="width: 270px; height: 32px"
                      :label="lightReflexL"
                    >
                      <div style="height: 82px; line-height: 82px">
                        直接对光反射
                      </div>
                      <el-input
                        v-model="lightReflexL"
                        placeholder="mm"
                        style="
                          width: 150px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                      </el-input>
                    </el-checkbox>
                    <el-checkbox :label="pupilTextL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="pupilTextL"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row item-mr">
        <div class="table-title-body">
          <span class="item-table-text">晶状体</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.crystallineLensR">
                    <el-checkbox :label="'透明'">透明</el-checkbox>
                    <el-checkbox
                      style="width: 140px; height: 32px"
                      :label="muddyR"
                    >
                      <div style="height: 32px; line-height: 32px">混浊</div>
                      <el-select
                        v-model="muddyR"
                        placeholder="请选择"
                        style="
                          width: 85px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                        <el-option
                          v-for="item in muddyOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-checkbox>
                    <el-checkbox :label="crystallineTextR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="crystallineTextR"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.crystallineLensL">
                    <el-checkbox :label="'透明'">透明</el-checkbox>
                    <el-checkbox
                      style="width: 140px; height: 32px"
                      :label="muddyL"
                    >
                      <div style="height: 32px; line-height: 32px">混浊</div>
                      <el-select
                        v-model="muddyL"
                        placeholder="请选择"
                        style="
                          width: 85px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                        <el-option
                          v-for="item in muddyOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-checkbox>
                    <el-checkbox :label="crystallineTextL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="crystallineTextL"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-title">复诊：</div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">镜  片</span>
        </div>
        <div class="item-table">
          <div class="row-label">清洁度：</div>
          <el-checkbox-group v-model="patientInfo.cleanlinessR" class="check-right">
            <el-checkbox :label="'(-)'">(-)</el-checkbox>
            <el-checkbox :label="'(+)'">(+)</el-checkbox>
            <el-checkbox :label="'(++)'">(++)</el-checkbox>
            <el-checkbox :label="'(+++)'">(+++)</el-checkbox>
          </el-checkbox-group>

          <div class="row-label">划痕：</div>
          <el-checkbox-group v-model="patientInfo.scratchR"  class="check-right">
            <el-checkbox :label="'(-)'">(-)</el-checkbox>
            <el-checkbox :label="'(+)'">(+)</el-checkbox>
            <el-checkbox :label="'(++)'">(++)</el-checkbox>
            <el-checkbox :label="'(+++)'">(+++)</el-checkbox>
          </el-checkbox-group>

          <div class="row-label">其他：</div>
          <el-input
            placeholder="请输入"
            type="textarea"
            v-model="patientInfo.scratchTextR"
            :autosize="{ minRows: 1, maxRows: 1 }"
            show-word-limit
            style="width: 180px"
          ></el-input>
        </div>
        <div class="item-table">
          <div class="row-label">清洁度：</div>
          <el-checkbox-group v-model="patientInfo.scratchL"  class="check-right">
            <el-checkbox :label="'(-)'">(-)</el-checkbox>
            <el-checkbox :label="'(+)'">(+)</el-checkbox>
            <el-checkbox :label="'(++)'">(++)</el-checkbox>
            <el-checkbox :label="'(+++)'">(+++)</el-checkbox>
          </el-checkbox-group>

          <div class="row-label">划痕：</div>
          <el-checkbox-group v-model="patientInfo.scratchL"  class="check-right">
            <el-checkbox :label="'(-)'">(-)</el-checkbox>
            <el-checkbox :label="'(+)'">(+)</el-checkbox>
            <el-checkbox :label="'(++)'">(++)</el-checkbox>
            <el-checkbox :label="'(+++)'">(+++)</el-checkbox>
          </el-checkbox-group>

          <div class="row-label">其他：</div>
          <el-input
            placeholder="请输入"
            type="textarea"
            v-model="patientInfo.scratchTextL"
            :autosize="{ minRows: 1, maxRows: 1 }"
            show-word-limit
            style="width: 180px"
          ></el-input>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">眼表健康</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.ocularSurfaceR">
                    <el-checkbox :label="'角膜光滑透明'"></el-checkbox>
                    <el-checkbox
                      style="width: 165px; height: 32px"
                      :label="cornealStainingR"
                    >
                      <div style="height: 32px; line-height: 32px">
                        角膜点染
                      </div>
                      <el-select
                        v-model="cornealStainingR"
                        placeholder="请选择"
                        style="
                          width: 85px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                        <el-option
                          v-for="item in cornealStainingOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-checkbox>
                    <el-checkbox :label="'睑板腺开口阻塞'"
                      >睑板腺开口阻塞</el-checkbox
                    >
                    <el-checkbox :label="ocularSurfaceTextR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="ocularSurfaceTextR"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.ocularSurfaceL">
                    <el-checkbox :label="'角膜光滑透明'"></el-checkbox>
                    <el-checkbox
                      style="width: 165px; height: 32px"
                      :label="cornealStainingL"
                    >
                      <div style="height: 32px; line-height: 32px">
                        角膜点染
                      </div>
                      <el-select
                        v-model="cornealStainingL"
                        placeholder="请选择"
                        style="
                          width: 85px;
                          position: absolute;
                          top: 0;
                          right: 0;
                        "
                      >
                        <el-option
                          v-for="item in cornealStainingOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        >
                        </el-option>
                      </el-select>
                    </el-checkbox>
                    <el-checkbox :label="'睑板腺开口阻塞'"
                      >睑板腺开口阻塞</el-checkbox
                    >
                    <el-checkbox :label="ocularSurfaceTextL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="ocularSurfaceTextL"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">泪液检查</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">BUT：</div>
            <el-input
                    v-model="patientInfo.butSecondR"
                    placeholder="请输入"
                    class="mr24 w180i"
                  ></el-input>
          </div>
          <div class="table-row">
            <div class="row-label-w">Schirmer I Test：</div>
            <el-input
                    v-model="patientInfo.schirmerSecondR"
                    placeholder="请输入"
                    class="mr24 w80i"
                  ></el-input>mm/5min
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">BUT：</div>
            <el-input
                    v-model="patientInfo.butSecondL"
                    placeholder="请输入"
                    class="mr24 w180i"
                  ></el-input>
          </div>
          <div class="table-row">
            <div class="row-label-w">Schirmer I Test：</div>
            <el-input
                    v-model="patientInfo.schirmerSecondL"
                    placeholder="请输入"
                    class="mr24 w80i"
                  ></el-input>mm/5min
          </div>
        </div>
      </div>
      <div class="item-row">
        <div class="table-title-body">
          <span class="item-table-text">配适状态</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.matchingStateR">
                    <el-checkbox :label="'0 级'"> 0 级</el-checkbox>
                    <el-checkbox :label="'Ⅰ级'">Ⅰ级</el-checkbox>
                    <el-checkbox :label="'Ⅱ级'">Ⅱ级</el-checkbox>
                    <el-checkbox :label="'Ⅲ级'">Ⅲ级</el-checkbox>
                    <el-checkbox :label="'Ⅳ级'">Ⅳ级</el-checkbox>
                    <el-checkbox :label="'睑板腺开口阻塞'"
                      >睑板腺开口阻塞</el-checkbox
                    >
                    <el-checkbox :label="matchingStateTextR">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="matchingStateTextR"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <el-checkbox-group v-model="patientInfo.matchingStateL">
                    <el-checkbox :label="'0 级'"> 0 级</el-checkbox>
                    <el-checkbox :label="'Ⅰ级'">Ⅰ级</el-checkbox>
                    <el-checkbox :label="'Ⅱ级'">Ⅱ级</el-checkbox>
                    <el-checkbox :label="'Ⅲ级'">Ⅲ级</el-checkbox>
                    <el-checkbox :label="'Ⅳ级'">Ⅳ级</el-checkbox>
                    <el-checkbox :label="'睑板腺开口阻塞'"
                      >睑板腺开口阻塞</el-checkbox
                    >
                    <el-checkbox :label="matchingStateTextL">
                      <el-input
                        type="textarea"
                        placeholder="其他"
                        v-model="matchingStateTextL"
                        :autosize="{ minRows: 1, maxRows: 1 }"
                        show-word-limit
                        style="width: 180px"
                      >
                      </el-input>
                    </el-checkbox>
                  </el-checkbox-group>
          </div>
        </div>
      </div>
      <div class="item-row item-mr">
        <div class="table-title-body">
          <span class="item-table-text">片上检影</span>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">R：</div>
            <el-input
              v-model="patientInfo.skiascopyOneRR"
              placeholder="请输入"
              class="mr24 w80i"
            ></el-input>
            <div class="row-label">X：</div>
            <el-input
              v-model="patientInfo.skiascopyOneXR"
              placeholder="请输入"
              class="mr24 w80i"
            ></el-input>
          </div>
          <div class="table-row">
            <div class="row-label">R：</div>
            <el-input
              v-model="patientInfo.skiascopyTwoRR"
              placeholder="请输入"
              class="mr24 w80i"
            ></el-input>
            <div class="row-label">X：</div>
            <el-input
              v-model="patientInfo.skiascopyTwoXR"
              placeholder="请输入"
              class="mr24 w80i"
            ></el-input>
          </div>
        </div>
        <div class="item-table">
          <div class="table-row">
            <div class="row-label">R：</div>
            <el-input
              v-model="patientInfo.skiascopyOneRL"
              placeholder="请输入"
              class="mr24 w80i"
            ></el-input>
            <div class="row-label">X：</div>
            <el-input
              v-model="patientInfo.skiascopyOneXL"
              placeholder="请输入"
              class="mr24 w80i"
            ></el-input>
          </div>
          <div class="table-row">
            <div class="row-label">R：</div>
            <el-input
              v-model="patientInfo.skiascopyTwoRL"
              placeholder="请输入"
              class="mr24 w80i"
            ></el-input>
            <div class="row-label">X：</div>
            <el-input
              v-model="patientInfo.skiascopyTwoXL"
              placeholder="请输入"
              class="mr24 w80i"
            ></el-input>
          </div>
        </div>
      </div>
      <el-row class="card-btn">
        <el-button @click="resetQuery">重置</el-button>
        <el-button type="primary" @click="submitForm">提交</el-button>
      </el-row>
    </div>
  </div>
</template>

<script setup name="slitLamp">

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
  scardamyxisL: [],
  scardamyxisR: [],
  butL: "",
  schirmerL: "",
  butR: "",
  schirmerR: "",
  apparatusLacrimalisL: [],
  apparatusLacrimalisR: [],
  eyemoveL: [],
  eyemoveR: [],
  eyelidL: [],
  eyelidR: [],
  palpebralConjunctivaL: [],
  palpebralConjunctivaR: [],
  corneaL: [],
  corneaR: [],
  atriaL: [],
  atriaR: [],
  irisL: [],
  irisR: [],
  pupilL: [],
  pupilR: [],
  crystallineLensL: [],
  crystallineLensR: [],
  cleanlinessL: [],
  scratchL: [],
  scratchTextL: "",
  cleanlinessR: [],
  scratchR: [],
  scratchTextR: "",
  ocularSurfaceL: [],
  ocularSurfaceR: [],
  butSecondL: "",
  schirmerSecondL: "",
  butSecondR: "",
  schirmerSecondR: "",
  matchingStateL: [],
  matchingStateR: [],
  skiascopyOneRL: "",
  skiascopyOneXL: "",
  skiascopyTwoRL: "",
  skiascopyTwoXL: "",
  skiascopyOneRR: "",
  skiascopyOneXR: "",
  skiascopyTwoRR: "",
  skiascopyTwoXR: "",
});
const frequencyL = ref("");
const frequencyR = ref("");
const apparatusTextL = ref("");
const apparatusTextR = ref("");
const eyelidToneL = ref("");
const eyelidToneR = ref("");
const eyelidTextL = ref("");
const eyelidTextR = ref("");
const palpebralTextL = ref("");
const palpebralTextR = ref("");
const transverseL = ref("");
const transverseR = ref("");
const corneaTextL = ref("");
const corneaTextR = ref("");
const atriaTextL = ref("");
const atriaTextR = ref("");
const irisTextL = ref("");
const irisTextR = ref("");
const diameterL = ref("");
const diameterR = ref("");
const lightReflexL = ref("");
const lightReflexR = ref("");
const pupilTextL = ref("");
const pupilTextR = ref("");
const ocularSurfaceTextL = ref("");
const ocularSurfaceTextR = ref("");
const matchingStateTextL = ref("");
const matchingStateTextR = ref("");
/** 重置按钮操作 */
function resetQuery() {
  patientInfo.value = {
    scardamyxisL: [],
    scardamyxisR: [],
    butL: "",
    schirmerL: "",
    butR: "",
    schirmerR: "",
    apparatusLacrimalisL: [],
    apparatusLacrimalisR: [],
    eyemoveL: [],
    eyemoveR: [],
    eyelidL: [],
    eyelidR: [],
    palpebralConjunctivaL: [],
    palpebralConjunctivaR: [],
    corneaL: [],
    corneaR: [],
    atriaL: [],
    atriaR: [],
    irisL: [],
    irisR: [],
    pupilL: [],
    pupilR: [],
    crystallineLensL: [],
    crystallineLensR: [],
    cleanlinessL: [],
    scratchL: [],
    scratchTextL: "",
    cleanlinessR: [],
    scratchR: [],
    scratchTextR: "",
    ocularSurfaceL: [],
    ocularSurfaceR: [],
    butSecondL: "",
    schirmerSecondL: "",
    butSecondR: "",
    schirmerSecondR: "",
    matchingStateL: [],
    matchingStateR: [],
    skiascopyOneRL: "",
    skiascopyOneXL: "",
    skiascopyTwoRL: "",
    skiascopyTwoXL: "",
    skiascopyOneRR: "",
    skiascopyOneXR: "",
    skiascopyTwoRR: "",
    skiascopyTwoXR: "",
  };
}
/** 提交按钮 */
function submitForm() {
  const isFile = false;
  let sq = {
    scardamyxisL: patientInfo.value.scardamyxisL.toString(),
    scardamyxisR: patientInfo.value.scardamyxisR.toString(),
    butL: patientInfo.value.butL,
    schirmerL: patientInfo.value.schirmerL,
    butR: patientInfo.value.butR,
    schirmerR: patientInfo.value.schirmerR,
    apparatusLacrimalisL: patientInfo.value.apparatusLacrimalisL.toString(),
    apparatusLacrimalisR: patientInfo.value.apparatusLacrimalisR.toString(),
    eyemoveL: patientInfo.value.eyemoveL.toString(),
    eyemoveR: patientInfo.value.eyemoveR.toString(),
    eyelidL: patientInfo.value.eyelidL.toString(),
    eyelidR: patientInfo.value.eyelidR.toString(),
    palpebralConjunctivaL: patientInfo.value.palpebralConjunctivaL.toString(),
    palpebralConjunctivaR: patientInfo.value.palpebralConjunctivaR.toString(),
    corneaL: patientInfo.value.corneaL.toString(),
    corneaR: patientInfo.value.corneaR.toString(),
    atriaL: patientInfo.value.atriaL.toString(),
    atriaR: patientInfo.value.atriaR.toString(),
    irisL: patientInfo.value.irisL.toString(),
    irisR: patientInfo.value.irisR.toString(),
    pupilL: patientInfo.value.pupilL.toString(),
    pupilR: patientInfo.value.pupilR.toString(),
    crystallineLensL: patientInfo.value.crystallineLensL.toString(),
    crystallineLensR: patientInfo.value.crystallineLensR.toString(),
    cleanlinessL: patientInfo.value.cleanlinessL.toString(),
    scratchL: patientInfo.value.scratchL.toString(),
    scratchTextL: patientInfo.value.scratchTextL,
    cleanlinessR: patientInfo.value.cleanlinessR.toString(),
    scratchR: patientInfo.value.scratchR.toString(),
    scratchTextR: patientInfo.value.scratchTextR,
    ocularSurfaceL: patientInfo.value.ocularSurfaceL.toString(),
    ocularSurfaceR: patientInfo.value.ocularSurfaceR.toString(),
    butSecondL: patientInfo.value.butSecondL,
    schirmerSecondL: patientInfo.value.schirmerSecondL,
    butSecondR: patientInfo.value.butSecondR,
    schirmerSecondR: patientInfo.value.schirmerSecondR,
    matchingStateL: patientInfo.value.matchingStateL.toString(),
    matchingStateR: patientInfo.value.matchingStateR.toString(),
    skiascopyOneRL: patientInfo.value.skiascopyOneRL,
    skiascopyOneXL: patientInfo.value.skiascopyOneXL,
    skiascopyTwoRL: patientInfo.value.skiascopyTwoRL,
    skiascopyTwoXL: patientInfo.value.skiascopyTwoXL,
    skiascopyOneRR: patientInfo.value.skiascopyOneRR,
    skiascopyOneXR: patientInfo.value.skiascopyOneXR,
    skiascopyTwoRR: patientInfo.value.skiascopyTwoRR,
    skiascopyTwoXR: patientInfo.value.skiascopyTwoXR,
  };
  const contant = JSON.stringify({slitLamp:sq});
  emit('update', isFile, contant);
  console.log("object :>> ", sq, contant, form.value);
}
const eyelidOptions = ref([
  {
    value: "正常",
    label: "正常",
  },
  {
    value: "紧张",
    label: "紧张",
  },
  {
    value: "松弛",
    label: "松弛",
  },
]);
const muddyOptions = ref([
  {
    value: "透明",
    label: "透明",
  },
  {
    value: "核",
    label: "核",
  },
  {
    value: "前囊膜",
    label: "前囊膜",
  },
  {
    value: "后囊膜",
    label: "后囊膜",
  },
]);
const cornealStainingOptions = ref([
  {
    value: "0 级",
    label: "0 级",
  },
  {
    value: "Ⅰ级",
    label: "Ⅰ级",
  },
  {
    value: "Ⅱ级",
    label: "Ⅱ级",
  },
  {
    value: "Ⅲ级",
    label: "Ⅲ级",
  },
  {
    value: "Ⅳ级",
    label: "Ⅳ级",
  },
]);

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
  height: 30px;
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
  width: 40%;
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
:deep(.el-checkbox-group) {
  display: flex;
  flex-direction: column;
}
:deep(.check-right.el-checkbox-group) {
  flex-direction: row !important;
}
.row-label-w {
  width: 100px;
}
</style>