import { getData, getDataWithourLimit } from "@/apis/common";
import Doctor from "@/components/Doctor";
import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const doctors = () => {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [patientData, setPatientData] = useState({
    name: "",
    age: 0,
    gender: 0,
    phone: "",
    complaint: "",
  });

  const { name, age, gender, phone, complaint } = router.query;

  const findAllDoctors = async () => {
    const res = await getDataWithourLimit(
      `user-management?role=4&$limit=-1&$populate=doctorProfile`
    );
    setData(res);
    // await axios.
  };

  useEffect(() => {
    setPatientData({
      name: name,
      age: parseInt(age),
      gender: gender,
      phone: phone,
      complaint: complaint,
    });

    findAllDoctors();
  }, [router.query]);

  return (
    <>
      {!!data.length &&
        data.map((each, index) => (
          <Doctor
            doctorId={each._id}
            name={each.name}
            photo={each.avatar?.link}
            speciality={each.doctorProfile.specialities[0]}
            patientData={patientData}
          />
        ))}
    </>
  );
};

export default doctors;
