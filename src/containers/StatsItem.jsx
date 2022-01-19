import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";

import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

import { format, parseISO, subDays } from "date-fns";

import { useParams } from "react-router-dom";

import { useAuth } from "../contexts/AuthContext";
import menuItems from "../utils/menuItems";
import { expensesRef } from "../utils/firebase";
import { doc, getDoc } from "firebase/firestore";

import { useState, useEffect } from "react";

const data = [];
for (let num = 30; num >= 0; num--) {
  data.push({
    date: subDays(new Date(), num).toISOString().substr(0, 10),
    value: 1 + Math.random(),
  });
}

export default function Home() {
  const params = useParams();
  const { user } = useAuth();
  const [expenses, setExpenses] = useState("");
  const [menuItem, setMenuItem] = useState("");

  useEffect(() => {
    const getData = async () => {
      const expensesDoc = doc(expensesRef, user.uid);
      const expensesData = await getDoc(expensesDoc);
      setMenuItem(() => {
        return menuItems.find((item) => {
          return item.value === params.analyticCategory;
        });
      });
      setExpenses(expensesData.data());
    };
    return getData();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom component="div">
        {menuItem.name} Monthly Expenses
      </Typography>
      <ResponsiveContainer width="100%" height={500}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2451B7" stopOpacity={0.4} />
              <stop offset="75%" stopColor="#2451B7" stopOpacity={0.05} />
            </linearGradient>
          </defs>

          <Area dataKey="value" stroke="#2451B7" fill="url(#color)" />

          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tickFormatter={(str) => {
              const date = parseISO(str);
              if (date.getDate() % 7 === 0) {
                return format(date, "MMM, d");
              }
              return "";
            }}
          />

          <YAxis
            datakey="value"
            axisLine={false}
            tickLine={false}
            tickCount={8}
            tickFormatter={(number) => `$${number.toFixed(2)}`}
          />

          <Tooltip content={<CustomTooltip />} />

          <CartesianGrid opacity={0.1} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>${payload[0].value.toFixed(2)} CAD</p>
      </div>
    );
  }
  return null;
}
