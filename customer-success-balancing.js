const lib = require("./quickSort");
const quickSort = lib.quickSort;

function sortByScore(arr) {
	const tam = arr.length - 1;
	return quickSort(arr, 0, tam);
}

function removeCssAway(css, cssAway) {
	return css.filter(cs => !cssAway.includes(cs.id));
}

function distributeCustomerSuccessToClient(customers, CSsAvailable) {
	let customersAvaible = customers;
	let customersOfCSs = [];

	CSsAvailable.map((CS) => {
		const customersCompatible = customersAvaible.filter((customer, index) => {
			if (CS.score >= customer.score) {
				delete customersAvaible[index];
				return customer;
			}
		});

		if (customersCompatible.length !== 0) {
			customersOfCSs.push({ idCS: CS.id, customers: customersCompatible });
		}
	});

	return customersOfCSs;
}

function csWithMoreCustomers(clientsOfCustomerSuccess) {
	let idCustomerSuccess = 0;
	let amountCustomer = 0;
	let flagRepeat = false;

	clientsOfCustomerSuccess.map((cs) => {
		const totalCustomer = cs.customers.length;
		if (totalCustomer > amountCustomer) {
			amountCustomer = totalCustomer;
			idCustomerSuccess = cs.idCS;
		}
		else if (totalCustomer == amountCustomer) {
			flagRepeat = true;
		}
	})

	return flagRepeat ? 0 : idCustomerSuccess;
}

/**
 * Returns the id of the CustomerSuccess with the most customers
 * @param {array} customerSuccess
 * @param {array} customers
 * @param {array} customerSuccessAway
 */
function customerSuccessBalancing(
	customerSuccess,
	customers,
	customerSuccessAway
) {
	const cssAvailable = removeCssAway(customerSuccess, customerSuccessAway);
	const cssAvailableSorted = sortByScore(cssAvailable);
	const customerOfCss = distributeCustomerSuccessToClient(customers, cssAvailableSorted);
	return csWithMoreCustomers(customerOfCss);
}

module.exports = { customerSuccessBalancing };
