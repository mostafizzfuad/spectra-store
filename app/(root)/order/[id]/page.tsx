import { Metadata } from "next";
import { getOrderById } from "@/lib/actions/order.actions";
import { notFound, redirect } from "next/navigation";
import OrderDetailsTable from "./order-details-table";
import { ShippingAddress } from "@/types";
import { auth } from "@/auth";

export const metadata: Metadata = {
	title: "Order Details",
};

const OrderDetailsPage = async (props: {
	params: Promise<{
		id: string;
	}>;
}) => {
	const { id } = await props.params;

	const order = await getOrderById(id);
	if (!order) notFound();

	const session = await auth();

	let client_secret = null;

	return (
		<OrderDetailsTable
			order={{
				...order,
				shippingAddress: order.shippingAddress as ShippingAddress,
			}}
		/>
	);
};

export default OrderDetailsPage;
