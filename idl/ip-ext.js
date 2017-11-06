/*
Recommended order:
IPv6 header
Hop-by-Hop Options header
Destination Options header (note 1)
Routing header
Fragment header
Authentication header (note 2)
Encapsulating Security Payload header (note 2)
Destination Options header (note 3)
Upper-Layer header
*/

import ip from "./ip-header"
import hopByHop from "./ip-ext/hop-by-hop"
import destination from "./ip-ext/destination"
import routing from "./ip-ext/routing"
import fragment from "./ip-ext/fragment"
import authentication from "./ip-ext/authentication"
import esp from "./ip-ext/esp"

const headerOrder= [
	ip,
	hopByHop,
	destination,
	routing,
	fragment,
	authentication,
	esp
]

const headerOrderKeys= [
	"ip",
	"hopByHop,
	"destination",
	"routing",
	"fragment",
	"authentication",
	"esp"
]

export default headerOrder
export {
	ip,
	hopbyHop,
	destination,
	routing,
	fragment,
	authentication,
	esp,
	headerOrder
	headerOrderKeys
}
