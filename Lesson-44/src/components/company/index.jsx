import DeleteIcon from '../../icons/delete'
import EditIcon from '../../icons/edit'
import { deleteCompany } from '../../services';

function CompanyCard({ companyName, contactName, contactTitle, id, up, setUp }) {

  const _deleteCompnay = async () => {
    try {
      await deleteCompany(id);
    } catch (error) {
      console.log(error);
    }
    finally {
      setUp(!up)
    }
  }


  return (
    <div className='rounded-md shadow-md p-[30px] relative'>
      <h2 className='text-[30px]'>{companyName}</h2>
      <h3>{contactName}</h3>
      <p>{contactTitle}</p>
      <div className='absolute bottom-[10px] right-[15px]'>
        <button className='cursor-pointer'
          onClick={_deleteCompnay}>
          <DeleteIcon />
        </button>
        <button className='cursor-pointer'>
          <EditIcon />
        </button>
      </div>
    </div>
  )
}

export default CompanyCard