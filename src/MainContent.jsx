import { Grid2, Stack } from "@mui/material";
import Divider from "@mui/material/Divider";
import Grid from "@mui/material/Grid";
import Prayer from "./components/Prayer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";
import { useState, useEffect } from "react";
import pray1 from "./assets/1.png";
import pray2 from "./assets/2.png";
import pray3 from "./assets/3.png";
import pray4 from "./assets/4.png";
import pray5 from "./assets/5.png";
import moment from "moment";
import "moment/dist/locale/ar-dz";
import DailyQuote from "./components/DailyQuote";
moment.locale("ar");

export default function MainContent() {
  const [timings, setPrayTimings] = useState({
    Fajr: "02:52",
    Dhuhr: "13:18",
    Asr: "17:31",
    Maghrib: "20:10",
    Isha: "22:11",
  });
  const [selectedCity, setSelectedCity] = useState({
    displayName: "أبو راضي",
    apiName: "Tanta",
    timeZone: "Africa/Cairo",
  });

  // const [timeLeft, setTimeLeft] = useState("");
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");
  const [today, setToday] = useState("");
  const [remainingTime, setRemainingTime] = useState("");
  const [nextPrayerIndex, setNextPrayerIndex] = useState(0);
  const getPrayTimings = async () => {
    try {
      const response = await axios.get(
        `https://api.aladhan.com/v1/timingsByCity?country=EG&city=${selectedCity.apiName}`
      );
      setPrayTimings(response.data.data.timings);
    } catch (error) {
      console.error("Failed to fetch prayer timings:", error);
    }
  };
  const getTime = async () => {
    try {
      const response = await axios.get(
        `https://timeapi.io/api/time/current/zone?timeZone=${selectedCity.timeZone}`
      );
      setTime(response.data.time);
      setDate(response.data.date);
    } catch (error) {
      console.error("Failed to fetch time:", error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      await getPrayTimings();
      await getTime();
    };
    fetchData();
  }, [selectedCity]);

  const setupCountDownTimer = () => {
    const momentNow = moment();
    let prayerIndex = 2;
    if (
      momentNow.isAfter(moment(timings["Fajr"], "HH:mm")) &&
      momentNow.isBefore(moment(timings["Dhuhr"], "HH:mm"))
    ) {
      prayerIndex = 1;
    } else if (
      momentNow.isAfter(moment(timings["Dhuhr"], "HH:mm")) &&
      momentNow.isBefore(moment(timings["Asr"], "HH:mm"))
    ) {
      prayerIndex = 2;
    } else if (
      momentNow.isAfter(moment(timings["Asr"], "HH:mm")) &&
      momentNow.isBefore(moment(timings["Maghrib"], "HH:mm"))
    ) {
      prayerIndex = 3;
    } else if (
      momentNow.isAfter(moment(timings["Maghrib"], "HH:mm")) &&
      momentNow.isBefore(moment(timings["Isha"], "HH:mm"))
    ) {
      prayerIndex = 4;
    } else {
      prayerIndex = 0;
    }
    setNextPrayerIndex(prayerIndex);
    // now after knowing what the next prayer is, We can setup the countdown timer by getting the prayer's time
    const nextPrayerObject = prayersArray[prayerIndex];
    const nextPrayerTime = timings[nextPrayerObject.key];
    const nextPrayerTimeMoment = moment(nextPrayerTime, "hh:mm");
    let remainingTime = moment(nextPrayerTime, "hh:mm").diff(momentNow);

    if (remainingTime < 0) {
      const midnightDiff = moment("23.59.59", "hh:mm:ss").diff(momentNow);
      const fajrToMidnightDiff = nextPrayerTimeMoment.diff(
        moment("00:00:00", "hh:mm:ss")
      );
      const totalDifference = midnightDiff + fajrToMidnightDiff;
      remainingTime = totalDifference;
    }
    // دي عشان تخلي صيغة الوقت مفهومة تبقى بالساعات و الدقايق و الثواني مش بالميكرو ثانية
    const durationRemainingTime = moment.duration(remainingTime);
    setRemainingTime(
      `${durationRemainingTime.seconds()} : ${durationRemainingTime.minutes()} : ${durationRemainingTime.hours()}`
    );
  };
  useEffect(() => {
    const t = moment();
    setToday(t.format("MM DD YYYY | hh:mm"));
    let interval = setInterval(() => {
      setupCountDownTimer();
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, [timings]);

  const availableCity = [
    {
      displayName: "طنطا",
      apiName: "Tanta",
      timeZone: "Africa/Cairo",
    },
    {
      displayName: "القاهرة",
      apiName: "Cairo",
      timeZone: "Africa/Cairo",
    },
    {
      displayName: "دمياط",
      apiName: "Damietta",
      timeZone: "Africa/Cairo",
    },
  ];

  const prayersArray = [
    { key: "Fajr", displayName: "الفجر" },
    { key: "Dhuhr", displayName: "الظهر" },
    { key: "Asr", displayName: "العصر" },
    { key: "Maghrib", displayName: "المغرب" },
    { key: "Isha", displayName: "العشاء" },
  ];

  const handleCityChange = (event) => {
    const cityObject = availableCity.find((city) => {
      return city.apiName == event.target.value;
    });
    setSelectedCity(cityObject);
  };

  return (
    <>
      <Grid2 container>
        <Grid2 item xs={6}>
          <div>
            <h2>{selectedCity.displayName}</h2>
            <h3>{time}</h3>
            <h4>{date}</h4>
            <h5>{today}</h5>
          </div>
        </Grid2>
        <Grid2 item xs={6}>
          <div>
            <h2>
              اجهزي يا أحلى 🌸 و أشطر ❤️ موني فاضل لغاية صلاة{" "}
              {prayersArray[nextPrayerIndex].displayName}
            </h2>
            <h1>{remainingTime}</h1>
          </div>
        </Grid2>
      </Grid2>
      <Divider style={{ borderColor: "black", opacity: "0.2" }} />
      <div className="flex justify-center">
      <DailyQuote/>
      </div>
      <Divider style={{ borderColor: "black", opacity: "0.2" }} />
      <Stack
        direction={{ xs: "row" }}
        justifyContent="space-around"
        alignItems="center"
        flexWrap="wrap"
        sx={{ margin: "9px 2px 2px 0px", gap: { xs: 2, sm: 4 } }}
      >
        <Prayer
          sx={{ fontSize: "12px" }}
          image={pray1}
          text="الفجر"
          time={timings.Fajr}
        />
        <Prayer image={pray2} text="الظهر" time={timings.Dhuhr} />
        <Prayer image={pray3} text="العصر" time={timings.Asr} />
        <Prayer image={pray4} text="المغرب" time={timings.Maghrib} />
        <Prayer image={pray5} text="العشاء" time={timings.Isha} />
      </Stack>

      <Stack
        direction={"row"}
        justifyContent={"center"}
        style={{ margin: "10px" }}
      >
        <FormControl style={{ width: "20%" }}>
          <InputLabel id="demo-simple-select-label">المدينة</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            label="المدينة"
            value={selectedCity.apiName}
            onChange={handleCityChange}
          >
            {availableCity.map((city, index) => {
              return (
                <MenuItem key={index} value={city.apiName}>
                  {city.displayName}
                </MenuItem>
              );
            })}
          </Select>
        </FormControl>
      </Stack>
    </>
  );
}
