// Per-course unique thumbnail images
import pmiPmp from "@/assets/courses/pmi-pmp.jpg";
import pmiCapm from "@/assets/courses/pmi-capm.jpg";
import pmiAcp from "@/assets/courses/pmi-acp.jpg";
import pmiRmp from "@/assets/courses/pmi-rmp.jpg";
import pmiPba from "@/assets/courses/pmi-pba.jpg";
import pmiPgmp from "@/assets/courses/pmi-pgmp.jpg";
import compSec from "@/assets/courses/comp-sec.jpg";
import compNet from "@/assets/courses/comp-net.jpg";
import compA from "@/assets/courses/comp-a.jpg";
import compCysa from "@/assets/courses/comp-cysa.jpg";
import compPen from "@/assets/courses/comp-pen.jpg";
import compCld from "@/assets/courses/comp-cld.jpg";
import compSecx from "@/assets/courses/comp-secx.jpg";
import compSrv from "@/assets/courses/comp-srv.jpg";
import az900 from "@/assets/courses/az-900.jpg";
import az104 from "@/assets/courses/az-104.jpg";
import az305 from "@/assets/courses/az-305.jpg";
import az500 from "@/assets/courses/az-500.jpg";
import az204 from "@/assets/courses/az-204.jpg";
import ai900 from "@/assets/courses/ai-900.jpg";
import dp900 from "@/assets/courses/dp-900.jpg";
import ms900 from "@/assets/courses/ms-900.jpg";
import awsCcp from "@/assets/courses/aws-ccp.jpg";
import awsSaa from "@/assets/courses/aws-saa.jpg";
import awsDva from "@/assets/courses/aws-dva.jpg";
import awsSoa from "@/assets/courses/aws-soa.jpg";
import awsSap from "@/assets/courses/aws-sap.jpg";
import awsDop from "@/assets/courses/aws-dop.jpg";
import safeLsa from "@/assets/courses/safe-lsa.jpg";
import safeSsm from "@/assets/courses/safe-ssm.jpg";
import safePopm from "@/assets/courses/safe-popm.jpg";
import safeSpc from "@/assets/courses/safe-spc.jpg";
import safeRte from "@/assets/courses/safe-rte.jpg";
import safeLpm from "@/assets/courses/safe-lpm.jpg";

// Map course slug to unique thumbnail
const courseThumbnails: Record<string, string> = {
  "pmi-pmp": pmiPmp,
  "pmi-capm": pmiCapm,
  "pmi-acp": pmiAcp,
  "pmi-rmp": pmiRmp,
  "pmi-pba": pmiPba,
  "pmi-pgmp": pmiPgmp,
  "comp-sec": compSec,
  "comp-net": compNet,
  "comp-a": compA,
  "comp-cysa": compCysa,
  "comp-pen": compPen,
  "comp-cld": compCld,
  "comp-secx": compSecx,
  "comp-srv": compSrv,
  "az-900": az900,
  "az-104": az104,
  "az-305": az305,
  "az-500": az500,
  "az-204": az204,
  "ai-900": ai900,
  "dp-900": dp900,
  "ms-900": ms900,
  "aws-ccp": awsCcp,
  "aws-saa": awsSaa,
  "aws-dva": awsDva,
  "aws-soa": awsSoa,
  "aws-sap": awsSap,
  "aws-dop": awsDop,
  "safe-lsa": safeLsa,
  "safe-ssm": safeSsm,
  "safe-popm": safePopm,
  "safe-spc": safeSpc,
  "safe-rte": safeRte,
  "safe-lpm": safeLpm,
};

export default courseThumbnails;
