import React, { useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { useTranslation } from "react-i18next";
import styles from "./factorDetail.module.css";
import { useDispatch, useSelector } from "react-redux";
import {
  factorDetailFetching,
  getBasketDetails
} from "../../redux/factor/factorAction";
import { useRouter } from "next/router";
import Link from "next/link";
const FactorDetail = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const router = useRouter();
  const lang = useSelector((state) => state.stateLang.lng);

  const state = useSelector((state) => state.stateFactor.factorDetail);
  useEffect(() => {
    dispatch(factorDetailFetching(router.query.factorId));
  }, []);
  return (
    <div className="container">
      <div className={`row ${styles.factortable}`}>
        <h3 className="p-0 mb-4">
          {t("factorDetailTitle") + router.query.factorId}
        </h3>
        <TableContainer
          component={Paper}
          sx={{ height: "500px", overflow: "auto" }}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell align="center">{t("row")}</TableCell>
                <TableCell align="center">{t("image")}</TableCell>
                <TableCell align="center">{t("productName")}</TableCell>
                <TableCell align="center">{t("productQty")}</TableCell>
                <TableCell align="center">{t("productCollection")}</TableCell>
              </TableRow>
            </TableHead>
            {state.map((item, index) => (
              <>
                <TableBody>
                  <TableCell align="center">
                    {" "}
                    <Link href={`/product/${item.productId}`}>
                      <a>{index + 1}</a>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    <Link href={`/product/${item.productId}`}>
                      <a>
                        <img src={item.filePath} alt="productImage" />
                      </a>
                    </Link>
                  </TableCell>
                  <TableCell align="center">
                    {lang === "fa" ? item.title : item.titleEn}
                  </TableCell>
                  <TableCell align="center">{item.qty}</TableCell>
                  <TableCell align="center">
                    {lang === "fa"
                      ? item.collection.title
                      : item.collection.titleEn}
                  </TableCell>
                </TableBody>
              </>
            ))}
          </Table>
        </TableContainer>
      </div>
    </div>
  );
};

export default FactorDetail;
