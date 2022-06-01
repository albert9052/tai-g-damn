<template>
  <div class="location-page">
    <div class="location-page-title">
      <img
        class="location-page-title__icon"
        src="@/assets/pictures/icon/icon_locatioon-03-02.png"
      />
      <span class="location-page-title__name">據點</span>
    </div>
    <div class="location-page-content">
      <div class="location-list">
        <div
          class="location"
          :class="{
            'location--selected':
              openedMarkerID === location.id || openedMarkerID === null,
          }"
          v-for="location in locations"
          :key="location.id"
        >
          <div class="location__store-name">[ {{ location.storeName }} ]</div>
          <div class="location__information-container">
            <div class="location__information-title-container">
              <div class="location__information-title">地址</div>
              <div class="location__information-title">電話</div>
              <div class="location__information-title">營業時間</div>
            </div>
            <div class="location__information-content-container">
              <div class="location__information-content">
                {{ location.address }}
              </div>
              <div class="location__information-content">
                {{ location.phone }}
              </div>
              <div class="location__information-multiple-contents">
                <div
                  class="location__information-content"
                  v-for="(businessHour, index) in location.businessHours"
                  :key="index"
                >
                  {{ businessHour }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GMapMap
        class="map"
        :center="{ lat: 25.027059, lng: 121.535414 }"
        :zoom="14"
        map-type-id="terrain"
      >
        <GMapMarker
          :key="location.id"
          v-for="location in locations"
          :position="location.position"
          :clickable="true"
          :draggable="false"
          @click="openMarker(location.id)"
        >
          <GMapInfoWindow
            :closeclick="true"
            @closeclick="openMarker(null)"
            :opened="openedMarkerID === location.id"
          >
            <div class="info-window">
              <div class="info-window__store-name">
                {{ location.storeName }}
              </div>
            </div>
          </GMapInfoWindow>
        </GMapMarker>
      </GMapMap>
    </div>
  </div>
</template>

<script>
export default {
  name: "LocationPage",
  data() {
    return {
      openedMarkerID: null,
      locations: [
        {
          id: "first-store",
          position: {
            lat: 25.01374,
            lng: 121.54061,
          },
          storeName: "台科大總店",
          address: "10635 台北市大安區基隆路 4 段 43 號",
          phone: "+886-2-2733-3141",
          businessHours: [
            "週一到週四 17:00 ~ 24:00",
            "週五到週日 17:00 ~ 01:00",
          ],
        },
        {
          id: "second-store",
          position: {
            lat: 25.00994,
            lng: 121.53773,
          },
          storeName: "台大店",
          address: "10617 台北市大安區羅斯福路 4 段 1 號",
          phone: "+886-2-2362-7651",
          businessHours: ["週一到週日 17:00 ~ 24:00"],
        },
        {
          id: "third-store",
          position: {
            lat: 25.04162,
            lng: 121.53371,
          },
          storeName: "北科大店",
          address: "106344 台北市大安區忠孝東路 3 段 1 號",
          phone: "+886-2-2771-2171",
          businessHours: ["週一到週日 17:00 ~ 24:00"],
        },
        {
          id: "fourth-store",
          position: {
            lat: 25.026449,
            lng: 121.527573,
          },
          storeName: "師範店",
          address: "106344 台北市大安區和平東路 1 段 162 號",
          phone: "+886-2-7749-1111",
          businessHours: ["週一到週日 17:00 ~ 24:00"],
        },
      ],
    };
  },
  methods: {
    openMarker(id) {
      this.openedMarkerID = id;
    },
  },
};
</script>
