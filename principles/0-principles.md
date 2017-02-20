# Principles

ipvsixland specifications derive from the principles of it's architecture, collected here in [`principles/`](/principles).

1. Common exchange
1. Performance

# Common exchange

ipvsixland is based around message exchanges between all manners of web agency- the page, elements on the page, workers, peers and servers all need a common way to talk among each other.

To enact a common exchange, ipvsixland uses a serialized structure message passing, defining it's workings in terms of this serialization schema, which is the preferred message format for all ipvsixland capabilities.

# Performance

ipvsixland sees itself as becoming a pervasive connective underlay for large systems of componenets spanning multiple physical machines. Thus performance is an abstract and overarching principle that must shape ipvsixland.
