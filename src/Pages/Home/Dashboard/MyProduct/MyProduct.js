import { useQuery } from "@tanstack/react-query";
import { useContext, useState } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../../Context/Authprovider/Authprovider";
import ConfirmationModal from "../../../../Shared/ConfirmationModal/ConfirmationModal";
import Loading from "../../../../Shared/Loading/Loading";

const MyProduct = () => {
    const { user } = useContext(AuthContext);
    const [deletingProduct, setDeletingProduct] = useState(null);
    const closeModal = () => {
        setDeletingProduct(null);
    }
    const { data: Products = [],isLoading,refetch } = useQuery({
        queryKey: ['products', user?.email],
        queryFn: async () => {
            const res = await fetch(`https://recycle-bin-server-rose.vercel.app/products?email=${user?.email}`, {
                headers: {
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                }
            });
            const data = await res.json();
            return data;
        }
    })

    /* const { data: Products, isLoading, refetch } = useQuery({

        queryKey: ['product'],
        queryFn: async () => {
            try {
                const res = await fetch(`https://recycle-bin-server-rose.vercel.app/products?email=${user?.email}`, {
                    headers: {
                        authorization: `beare ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }
            catch {

            }
        }
    }); */
    const handleDeleteProduct = product => {
        fetch(`https://recycle-bin-server-rose.vercel.app/products/${product._id}`, {
            method: 'DELETE',
            headers: {
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    refetch();
                    toast.success(`Doctor ${product.name} deleted successfully`)
                }
            })
    }
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div>
            <h2 className="text-3xl text-center mb-4">Manage Product: {Products?.length}</h2>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Status</th>
                            <th>Catagory</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        { Products.length &&
                            Products.map((product, i) => <tr key={product._id}>
                                <th>{i + 1}</th>
                                <td><div className="avatar">
                                    <div className="w-24 rounded-full">
                                        <img src={product.image} alt="" />
                                    </div>
                                </div></td>
                                <td>{product.name}</td>
                                <td>{product.condition.excelent ? "available" : "sold"}</td>
                                <td>{product.catagory}</td>
                                <td>
                                    <label onClick={() => setDeletingProduct(product)} htmlFor="confirmation-modal" className="btn btn-sm btn-error">Delete</label>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
            {
                deletingProduct && <ConfirmationModal
                    title={`Are you sure you want to delete?`}
                    message={`If you delete ${deletingProduct.name}. It cannot be undone.`}
                    successAction={handleDeleteProduct}
                    successButtonName="Delete"
                    modalData={deletingProduct}
                    closeModal={closeModal}
                >
                </ConfirmationModal>
            }
        </div>
    );
};

export default MyProduct;