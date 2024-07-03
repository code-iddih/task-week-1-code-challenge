// Function to calculate net salary
const prompt = require('prompt-sync')();

async function calculateNetSalary(basicSalary, benefits) {
    // Checks if the Basic Salary and Bemefits is empty or Not Provided
    if (basicSalary === null || basicSalary === undefined || benefits === null || benefits === undefined) {
        return "Basic salary and benefits must be provided."; // 
    }

    // Checks if the Basic Salary is a Positive Number
    if (typeof basicSalary !== 'number' || isNaN(basicSalary) || basicSalary < 0) {
        return "Basic salary must be a non-negative number.";
    }

    // Checks if the Benefit is Empty or Not Provided
    if (typeof benefits !== 'number' || isNaN(benefits) || benefits < 0) {
        return "Benefits must be a non-negative number.";
    }

    // Simulated tax rates for demonstration
    const TAX_RATES = [
        { threshold: 24000, rate: 10 },
        { threshold: 32333, rate: 15 },
        { threshold: 40467, rate: 20 },
        { threshold: 57067, rate: 25 },
        { threshold: 74067, rate: 30 },
        { threshold: 101067, rate: 35 },
        { threshold: Infinity, rate: 45 }
    ];

    // Simulated NHIF rates for demonstration
    const NHIF_RATES = [
        { min: 0, max: 5999, amount: 150 },
        { min: 6000, max: 7999, amount: 300 },
        { min: 8000, max: 11999, amount: 400 },
        { min: 12000, max: 14999, amount: 500 },
        { min: 15000, max: 19999, amount: 600 },
        { min: 20000, max: 24999, amount: 750 },
        { min: 25000, max: 29999, amount: 850 },
        { min: 30000, max: 34999, amount: 900 },
        { min: 35000, max: 39999, amount: 950 },
        { min: 40000, max: 44999, amount: 1000 },
        { min: 45000, max: 49999, amount: 1100 },
        { min: 50000, max: 59999, amount: 1200 },
        { min: 60000, max: 69999, amount: 1300 },
        { min: 70000, max: 79999, amount: 1400 },
        { min: 80000, max: 89999, amount: 1500 },
        { min: 90000, max: 99999, amount: 1600 },
        { min: 100000, max: Infinity, amount: 1700 }
    ];

    // Simulated NSSF rate for demonstration
    const NSSF_RATE = 6; // 6% of basic salary

    // Calculate gross salary
    let grossSalary = basicSalary + benefits;

    // Calculate PAYE (tax)
    let taxableIncome = grossSalary - 24000; // Deduct personal relief, assuming threshold
    let paye = 0;

    for (let i = 0; i < TAX_RATES.length; i++) {
        if (taxableIncome <= 0) {
            break;
        }

        let rate = TAX_RATES[i].rate / 100;
        let threshold = TAX_RATES[i].threshold;

        if (taxableIncome <= threshold - 24000) {
            paye += taxableIncome * rate;
            taxableIncome = 0;
        } else {
            paye += (threshold - 24000) * rate;
            taxableIncome -= (threshold - 24000);
        }
    }

    // Calculate NHIF deductions based on gross salary
    let nhifDeduction = 0;

    for (let i = 0; i < NHIF_RATES.length; i++) {
        let rate = NHIF_RATES[i].amount;
        let min = NHIF_RATES[i].min;
        let max = NHIF_RATES[i].max;

        if (grossSalary >= min && grossSalary <= max) {
            nhifDeduction = rate;
            break;
        }
    }

    // Calculate NSSF deductions
    let nssfDeduction = (basicSalary * NSSF_RATE / 100);

    // Calculate net salary
    let netSalary = grossSalary - paye - nhifDeduction - nssfDeduction;

    // Return the calculated values
    return {
        grossSalary: grossSalary,
        paye: paye.toFixed(2),
        nhif: nhifDeduction.toFixed(2),
        nssf: nssfDeduction.toFixed(2),
        netSalary: netSalary.toFixed(2)
    };
}

async function exampleUsage() {
    let basicSalaryInput = prompt("Enter the basic salary: ");
    let benefitsInput = prompt("Enter the benefits: ");

    let basicSalary = parseFloat(basicSalaryInput);
    let benefits = parseFloat(benefitsInput);

    let result = await calculateNetSalary(basicSalary, benefits);

    if (typeof result === 'string') {
        console.error(result);
    } else {
        console.log("Gross Salary:", result.grossSalary);
        console.log("PAYE (Tax):", result.paye);
        console.log("NHIF Deduction:", result.nhif);
        console.log("NSSF Deduction:", result.nssf);
        console.log("Net Salary:", result.netSalary);
    }
}

// Calling the function
exampleUsage();
