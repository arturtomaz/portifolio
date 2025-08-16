function InputContact(props) {
  return (
    <div>
      <input
        className="w-full bg-[rgba(248,248,248,0.1)] rounded-[15px] text-[12px] sm:text-[15px] border-[#A7A7A7]/20 border-[1px] hover:border-[#CDEB85] px-4 py-2 sm:px-8 sm:py-4 focus:outline-2 focus:outline-[#88B876] transition-all duration-200"
        type={props.type}
        name={props.name}
        placeholder={props.placeholder}
        required
      />
    </div>
  );
}

export default InputContact;
