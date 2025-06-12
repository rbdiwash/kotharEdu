import React, { useState } from "react";
import { BiChevronRight } from "react-icons/bi";

const FINANCIAL_YEARS = [
  { value: "2024/25", label: "2024/25" },
  { value: "2023/24", label: "2023/24" },
  { value: "2022/23", label: "2022/23" },
];

const TAX_RATES_2024 = [
  { range: "$0 - $18,200", rate: "0%" },
  { range: "$18,201 - $45,000", rate: "16% of excess over $18,200" },
  {
    range: "$45,001 - $135,000",
    rate: "$4,288 plus 30% of excess over $45,000",
  },
  {
    range: "$135,001 - $190,000",
    rate: "$31,288 plus 37% of excess over $135,000",
  },
  {
    range: "$190,001 and over",
    rate: "$51,638 plus 45% of excess over $190,000",
  },
];

const MEDICARE_THRESHOLDS_2024 = [
  { range: "$0 - $27,222", rate: "0%" },
  { range: "$27,223 - $34,027", rate: "10% of excess over $27,222" },
  { range: "$34,028 and over", rate: "2% of total income" },
];

const TaxCalculator = () => {
  const [formData, setFormData] = useState({
    year: "2024/25",
    income: "",
    deductions: "",
    taxWithheld: "",
    medicareLevy: false,
  });
  const [taxDetails, setTaxDetails] = useState(null);

  const calculateTax = () => {
    const income = parseFloat(formData.income) || 0;
    const deductions = parseFloat(formData.deductions) || 0;
    const taxWithheld = parseFloat(formData.taxWithheld) || 0;
    const taxableIncome = Math.max(0, income - deductions);
    let baseTax = 0;
    let lito = 0;
    let medicareLevy = 0;

    // 2024/25 tax rates
    if (taxableIncome <= 18200) {
      baseTax = 0;
    } else if (taxableIncome <= 45000) {
      baseTax = (taxableIncome - 18200) * 0.16;
    } else if (taxableIncome <= 135000) {
      baseTax = (45000 - 18200) * 0.16 + (taxableIncome - 45000) * 0.3;
    } else if (taxableIncome <= 190000) {
      baseTax =
        (45000 - 18200) * 0.16 +
        (135000 - 45000) * 0.3 +
        (taxableIncome - 135000) * 0.37;
    } else {
      baseTax =
        (45000 - 18200) * 0.16 +
        (135000 - 45000) * 0.3 +
        (190000 - 135000) * 0.37 +
        (taxableIncome - 190000) * 0.45;
    }

    // LITO (Low Income Tax Offset)
    if (taxableIncome <= 37500) {
      lito = 700;
    } else if (taxableIncome <= 45000) {
      lito = 700 - (taxableIncome - 37500) * 0.05;
    } else if (taxableIncome <= 66667) {
      lito = 325 - (taxableIncome - 45000) * 0.015;
    } else {
      lito = 0;
    }
    lito = Math.max(0, lito);

    // Medicare Levy (2024/25 thresholds)
    if (formData.medicareLevy) {
      if (income <= 27222) {
        medicareLevy = 0;
      } else if (income <= 34027) {
        medicareLevy = (income - 27222) * 0.1;
      } else {
        medicareLevy = income * 0.02;
      }
    }

    const totalTaxPayable = Math.max(0, baseTax - lito + medicareLevy);
    const refundOrPayable = taxWithheld - totalTaxPayable;

    setTaxDetails({
      income,
      deductions,
      taxableIncome,
      baseTax,
      lito,
      medicareLevy,
      totalTaxPayable,
      taxWithheld,
      refundOrPayable,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    calculateTax();
  };

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat("en-AU", {
      style: "currency",
      currency: "AUD",
      minimumFractionDigits: 2,
    }).format(amount);
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-lightBlue min-h-screen">
      <div className="container mx-auto px-4">
        <div className="flex items-center space-x-3 mb-6">
          <h1 className="font-semibold flex items-center">Home</h1>
          <BiChevronRight className="text-2xl" />
          <span className="text-primary font-semibold">Tax Calculator</span>
        </div>
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#fafbfc] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row gap-8">
            {/* Left: Form */}
            <form
              onSubmit={handleSubmit}
              className="flex-1 min-w-[260px] max-w-md"
              autoComplete="off"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#ff6600]">
                Enter Your Details
              </h2>
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Financial Year
                  </label>
                  <select
                    value={formData.year}
                    onChange={(e) =>
                      setFormData({ ...formData, year: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ff6600]/20 focus:border-[#ff6600] outline-none bg-white"
                  >
                    {FINANCIAL_YEARS.map((y) => (
                      <option key={y.value} value={y.value}>
                        {y.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Total Annual Income ($)
                  </label>
                  <input
                    type="number"
                    value={formData.income}
                    onChange={(e) =>
                      setFormData({ ...formData, income: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ff6600]/20 focus:border-[#ff6600] outline-none"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Total Deductions ($)
                  </label>
                  <input
                    type="number"
                    value={formData.deductions}
                    onChange={(e) =>
                      setFormData({ ...formData, deductions: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ff6600]/20 focus:border-[#ff6600] outline-none"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium mb-1">
                    Tax Withheld ($)
                  </label>
                  <input
                    type="number"
                    value={formData.taxWithheld}
                    onChange={(e) =>
                      setFormData({ ...formData, taxWithheld: e.target.value })
                    }
                    className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-[#ff6600]/20 focus:border-[#ff6600] outline-none"
                  />
                </div>
                {taxDetails && (
                  <div
                    className={`text-2xl font-semibold rounded-lg px-4 py-3 mt-2 mb-1 flex items-center justify-between ${
                      taxDetails.refundOrPayable >= 0
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {taxDetails.refundOrPayable >= 0
                      ? "Tax Refund"
                      : "Tax Payable"}
                    <span className="ml-2 font-bold">
                      {taxDetails.refundOrPayable >= 0 ? "+" : "-"}
                      {formatCurrency(Math.abs(taxDetails.refundOrPayable))}
                    </span>
                  </div>
                )}
                <hr className="my-2 border-[#ff6600]" />
                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="medicareLevy"
                    checked={formData.medicareLevy}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        medicareLevy: e.target.checked,
                      })
                    }
                    className="accent-[#ff6600] w-5 h-5"
                  />
                  <label
                    htmlFor="medicareLevy"
                    className="text-gray-700 font-medium select-none"
                  >
                    Eligible for Medicare
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full bg-[#ff6600] text-white py-3 rounded-lg hover:bg-orange-600 transition-colors duration-300 mt-6 text-lg font-semibold"
              >
                Calculate Tax
              </button>
            </form>
            {/* Right: Tax Summary */}
            <div className="flex-1 min-w-[260px] max-w-md">
              <h2 className="text-2xl font-bold mb-6 text-[#ff6600]">
                Tax Summary
              </h2>
              {taxDetails ? (
                <div className="space-y-2 text-base">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Gross Income</span>
                    <span>{formatCurrency(taxDetails.income)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Total Deductions</span>
                    <span>{formatCurrency(taxDetails.deductions)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Taxable Income</span>
                    <span>{formatCurrency(taxDetails.taxableIncome)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <span className="text-gray-700">Base Income Tax</span>
                    <span>{formatCurrency(taxDetails.baseTax)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">
                      Low Income Tax Offset (LITO)
                    </span>
                    <span>{formatCurrency(taxDetails.lito)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Medicare Levy</span>
                    <span>{formatCurrency(taxDetails.medicareLevy)}</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold text-lg">
                    <span className="text-gray-800">Total Tax Payable</span>
                    <span className="text-gray-900">
                      {formatCurrency(taxDetails.totalTaxPayable)}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Tax Already Withheld</span>
                    <span>{formatCurrency(taxDetails.taxWithheld)}</span>
                  </div>
                  <hr className="mb-2" />
                  <div className="text-xs text-gray-500 mt-4">
                    <strong>{formData.year} Tax Rates</strong>
                  </div>
                </div>
              ) : (
                <div className="text-gray-400 text-center mt-12">
                  Fill in your details to see your tax summary.
                </div>
              )}
            </div>
          </div>
          {/* Tax Rates Table */}
          <div className="mt-10">
            <h3 className="text-2xl font-bold text-gray-800 mb-3">
              2024/25 Tax Rates
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                      Taxable Income
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                      Tax Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {TAX_RATES_2024.map((row, idx) => (
                    <tr key={idx} className="border-b last:border-b-0 bg-white">
                      <td className="px-4 py-2 text-gray-800">{row.range}</td>
                      <td className="px-4 py-2 text-gray-800">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mt-8 mb-3">
              2024/25 Medicare Levy Thresholds (Single)
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full border border-gray-200 rounded-lg">
                <thead className="bg-gray-100">
                  <tr>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                      Income Range
                    </th>
                    <th className="px-4 py-2 text-left font-semibold text-gray-700 border-b">
                      Medicare Levy Rate
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {MEDICARE_THRESHOLDS_2024.map((row, idx) => (
                    <tr key={idx} className="border-b last:border-b-0 bg-white">
                      <td className="px-4 py-2 text-gray-800">{row.range}</td>
                      <td className="px-4 py-2 text-gray-800">{row.rate}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TaxCalculator;
