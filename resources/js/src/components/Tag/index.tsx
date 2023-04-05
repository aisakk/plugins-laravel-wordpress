type PluginTag = {
    name: string;
  };

  type TagProps = {
    item: PluginTag;
};

const Tag: React.FC<TagProps> = ({ item }) => {
    return (
        <span className="bg-slate-300 text-slate-600 py-1 px-4 text-xs rounded-xl">{ item.name }</span>
    )
}

export default Tag
