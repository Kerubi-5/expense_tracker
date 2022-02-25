import PieChart from "../components/PieChart";
import Typography from "@mui/material/Typography";
import { useAuth } from "../contexts/AuthContext";
import { expensesRef } from "../utils/firebase";
import { getDocs, query, where } from "firebase/firestore";
import { startOfMonth, getMonth, format } from "date-fns";

import { useState, useEffect } from "react";
import { Container } from "@mui/material";

const StatsItems = () => {
  const { user } = useAuth();
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const cquery = query(
        expensesRef,
        where("createdAt", ">=", startOfMonth(Date.now())),
        where("userId", "==", user.uid)
      );
      const expensesData = await getDocs(cquery);
      var myExpenses = [];
      expensesData.docs.map((doc) => myExpenses.push(doc.data()));

      myExpenses.reduce((res, value) => {
        if (!res[value.category]) {
          res[value.category] = { category: value.category, price: 0 };
          result.push(res[value.category]);
        }
        res[value.category].price += value.price;
        return res;
      }, {});

      setCategory(result);
    };

    var result = [];

    return getData();
  }, [user.uid]);

  return (
    <>
      <Container sm>
        <Typography mt={5} variant="h4" gutterBottom component="div">
          {format(getMonth(Date.now()), "MMMM")} Expenses
        </Typography>
        <PieChart expenses={category} />
      </Container>
    </>
  );
};

export default StatsItems;
